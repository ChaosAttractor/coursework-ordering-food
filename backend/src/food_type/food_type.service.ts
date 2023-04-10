import { Injectable } from '@nestjs/common';
import { CreateFoodTypeDto } from './dto/create-food_type.dto';
import { UpdateFoodTypeDto } from './dto/update-food_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodType } from './entities/food_type.entity';

@Injectable()
export class FoodTypeService {
  constructor(
    @InjectRepository(FoodType)
    private readonly FoodTypeRepository: Repository<FoodType>,
  ) {}

  create(createFoodTypeDto: CreateFoodTypeDto): Promise<FoodType> {
    const food_type = new FoodType();

    food_type.type_id = createFoodTypeDto.type_id;
    food_type.type_name = createFoodTypeDto.type_name;
    return this.FoodTypeRepository.save(food_type);
  }

  async findAll(): Promise<FoodType[]> {
    return await this.FoodTypeRepository.find();
  }

  async findOne(id: number): Promise<FoodType> {
    return await this.FoodTypeRepository.findOneBy({ type_id: id });
  }

  async update(
    id: number,
    updateFoodTypeDto: UpdateFoodTypeDto,
  ): Promise<FoodType> {
    const food_type = await this.FoodTypeRepository.findOneBy({ type_id: id });

    food_type.type_id = updateFoodTypeDto.type_id;
    food_type.type_name = updateFoodTypeDto.type_name;

    return this.FoodTypeRepository.save(food_type);
  }

  async remove(id: number): Promise<void> {
    await this.FoodTypeRepository.delete(id);
  }
}
