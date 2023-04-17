import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleList } from 'src/auth/roles/role.enum';
import { Roles } from 'src/auth/roles/role.decorator';
import { Public } from 'src/auth/roles/public';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Get()
  findAll(@Res({ passthrough: true }) res: Response): Promise<User[]> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin, RoleList.Kitchen)
  @Get('logins')
  findAllLogins(@Res({ passthrough: true }) res: Response): Promise<User[]> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.userService.findAllLogins();
  }

  @Post()
  create(
    @Res({ passthrough: true }) res: Response,
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Patch(':id')
  update(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.userService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Delete(':id')
  remove(
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: string,
  ): Promise<void> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.userService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Post('role')
  getRole(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.userService.getRole(req.cookies.userId);
  }
}
