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
import { FoodTypeService } from './food_type.service';
import { CreateFoodTypeDto } from './dto/create-food_type.dto';
import { UpdateFoodTypeDto } from './dto/update-food_type.dto';
import { FoodType } from './entities/food_type.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles/role.decorator';
import { RoleList } from 'src/auth/roles/role.enum';
import { Public } from 'src/auth/roles/public';
import { Response } from 'express';

@Controller('food-type')
export class FoodTypeController {
  constructor(private readonly foodTypeService: FoodTypeService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Post()
  create(
    @Res({ passthrough: true }) res: Response,
    @Body() createFoodTypeDto: CreateFoodTypeDto,
  ): Promise<FoodType> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.foodTypeService.create(createFoodTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get()
  findAll(@Res({ passthrough: true }) res: Response): Promise<FoodType[]> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.foodTypeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get(':id')
  findOne(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<FoodType> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.foodTypeService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Patch(':id')
  update(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFoodTypeDto: UpdateFoodTypeDto,
  ) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.foodTypeService.update(id, updateFoodTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Delete(':id')
  remove(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.foodTypeService.remove(id);
  }
}
