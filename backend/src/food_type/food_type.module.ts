import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodTypeService } from './food_type.service';
import { FoodTypeController } from './food_type.controller';
import { FoodType } from './entities/food_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FoodType])],
  controllers: [FoodTypeController],
  providers: [FoodTypeService],
})
export class FoodTypeModule {}
