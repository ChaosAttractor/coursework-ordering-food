import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { Roles } from 'src/auth/roles/role.decorator';
import { RoleList } from 'src/auth/roles/role.enum';
import { Role } from './entities/role.entity';
import { RoleService } from './role.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Get()
  async findAll(): Promise<Role[]> {
    return await this.roleService.findAll();
  }

  @Post()
  create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleService.create(createRoleDto);
  }
}
