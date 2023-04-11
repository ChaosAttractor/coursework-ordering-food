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
import { FoodTypeService } from './food_type.service';
import { CreateFoodTypeDto } from './dto/create-food_type.dto';
import { UpdateFoodTypeDto } from './dto/update-food_type.dto';
import { FoodType } from './entities/food_type.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles/role.decorator';
import { RoleList } from 'src/auth/roles/role.enum';
import { Public } from 'src/auth/roles/public';

@Controller('food-type')
export class FoodTypeController {
  constructor(private readonly foodTypeService: FoodTypeService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Post()
  create(@Body() createFoodTypeDto: CreateFoodTypeDto): Promise<FoodType> {
    return this.foodTypeService.create(createFoodTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get()
  findAll(): Promise<FoodType[]> {
    return this.foodTypeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<FoodType> {
    return this.foodTypeService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFoodTypeDto: UpdateFoodTypeDto,
  ) {
    return this.foodTypeService.update(id, updateFoodTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RoleList.Admin)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.foodTypeService.remove(id);
  }
}
