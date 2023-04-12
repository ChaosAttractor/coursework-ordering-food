import { Controller, Get, Post, UseGuards, Body, Res } from '@nestjs/common';
import { Roles } from 'src/auth/roles/role.decorator';
import { RoleList } from 'src/auth/roles/role.enum';
import { Role } from './entities/role.entity';
import { RoleService } from './role.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateRoleDto } from './dto/create-role.dto';
import { Response } from 'express';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Get()
  async findAll(@Res({ passthrough: true }) res: Response): Promise<Role[]> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return await this.roleService.findAll();
  }

  @Post()
  create(
    @Res({ passthrough: true }) res: Response,
    @Body() createRoleDto: CreateRoleDto,
  ): Promise<Role> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.roleService.create(createRoleDto);
  }
}
