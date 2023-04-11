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
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { Roles } from 'src/auth/roles/role.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleList } from 'src/auth/roles/role.enum';
import { Public } from 'src/auth/roles/public';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Post()
  create(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menuService.create(createMenuDto);
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get()
  findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Menu> {
    return this.menuService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMenuDto: UpdateMenuDto,
  ): Promise<Menu> {
    return this.menuService.update(id, updateMenuDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.menuService.remove(id);
  }
}
