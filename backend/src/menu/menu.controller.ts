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
  Res,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { Roles } from 'src/auth/roles/role.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleList } from 'src/auth/roles/role.enum';
import { Public } from 'src/auth/roles/public';
import { Response } from 'express';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Post()
  create(
    @Res({ passthrough: true }) res: Response,
    @Body() createMenuDto: CreateMenuDto,
  ): Promise<Menu> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.menuService.create(createMenuDto);
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get()
  findAll(@Res({ passthrough: true }) res: Response): Promise<Menu[]> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.menuService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get(':id')
  findOne(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Menu> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.menuService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Patch(':id')
  update(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMenuDto: UpdateMenuDto,
  ): Promise<Menu> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.menuService.update(id, updateMenuDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Delete(':id')
  remove(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.menuService.remove(id);
  }
}
