import { Injectable } from '@nestjs/common';
import { Role } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async findOne(id: number): Promise<Role> {
    return await this.roleRepository.findOneBy({ id: id });
  }

  create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = new Role();
    role.role_name = createRoleDto.role_name;

    return this.roleRepository.save(role);
  }
}
