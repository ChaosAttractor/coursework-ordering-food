import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();

    user.id = createUserDto.id;
    user.login = createUserDto.login;
    user.password = createUserDto.password;
    user.role = createUserDto.role;

    return this.UserRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.UserRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.UserRepository.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.UserRepository.findOneBy({ id: id });

    user.id = updateUserDto.id;
    user.login = updateUserDto.login;
    user.password = updateUserDto.password;
    user.role = updateUserDto.role;

    return this.UserRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.UserRepository.delete(id);
  }
}
