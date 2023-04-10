import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly MenuRepository: Repository<Menu>,
  ) {}

  create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const menu = new Menu();

    menu.product_id = createMenuDto.product_id;
    menu.product_name = createMenuDto.product_name;
    menu.image = createMenuDto.image;
    menu.type = createMenuDto.type;
    menu.product_weight = createMenuDto.product_weight;
    menu.price = createMenuDto.price;

    return this.MenuRepository.save(menu);
  }

  async findAll(): Promise<Menu[]> {
    return await this.MenuRepository.find();
  }

  async findOne(id: number): Promise<Menu> {
    return await this.MenuRepository.findOneBy({ product_id: id });
  }

  async update(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    const menu = await this.MenuRepository.findOneBy({ product_id: id });

    menu.product_id = updateMenuDto.product_id;
    menu.product_name = updateMenuDto.product_name;
    menu.image = updateMenuDto.image;
    menu.type = updateMenuDto.type;
    menu.product_weight = updateMenuDto.product_weight;
    menu.price = updateMenuDto.price;

    return this.MenuRepository.save(menu);
  }

  async remove(id: number): Promise<void> {
    await this.MenuRepository.delete(id);
  }
}
