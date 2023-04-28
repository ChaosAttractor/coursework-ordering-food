import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RoleService } from 'src/role/role.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private roleRepository: RoleService,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findAllLogins(): Promise<User[]> {
    return await this.usersRepository.find({
      select: {
        id: true,
        username: true,
      },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = await bcrypt.hash(createUserDto.password, 10);
    user.role = createUserDto.role;

    return this.usersRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id: id });
    user.username = updateUserDto.username;
    if (updateUserDto.password) {
      user.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    user.role = updateUserDto.role;
    user.refreshToken = updateUserDto.refreshToken;

    return this.usersRepository.save(user);
  }

  async updateRefreshToken(id: number, refreshToken: string) {
    const user = await this.usersRepository.findOneBy({ id: id });

    user.refreshToken = refreshToken;

    return this.usersRepository.save(user);
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }

  findOneByLogin(username: string): Promise<User> {
    return this.usersRepository.findOneBy({ username: username });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async getRole(id: number): Promise<string> {
    const { role, ...user } = await this.usersRepository.findOneBy({ id: id });
    const { role_name } = await this.roleRepository.findOne(role);
    return role_name;
  }
}
