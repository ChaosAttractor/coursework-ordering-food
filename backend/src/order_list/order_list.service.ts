import { Injectable } from '@nestjs/common';
import { CreateOrderListDto } from './dto/create-order_list.dto';
import { UpdateOrderListDto } from './dto/update-order_list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderList } from './entities/order_list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderListService {
  constructor(
    @InjectRepository(OrderList)
    private readonly OrderListRepository: Repository<OrderList>,
  ) {}

  create(createOrderListDto: CreateOrderListDto): Promise<OrderList> {
    const order_list = new OrderList();

    order_list.order_id = createOrderListDto.order_id;
    order_list.list_item = createOrderListDto.list_item;
    order_list.ordered_by = createOrderListDto.ordered_by;
    order_list.status = createOrderListDto.status;
    order_list.date = createOrderListDto.date;
    order_list.payment_method = createOrderListDto.payment_method;
    order_list.price = createOrderListDto.price;

    return this.OrderListRepository.save(order_list);
  }

  async findAll(): Promise<OrderList[]> {
    return await this.OrderListRepository.find();
  }

  async findOne(id: number): Promise<OrderList> {
    return await this.OrderListRepository.findOneBy({ order_id: id });
  }

  async update(
    id: number,
    updateOrderListDto: UpdateOrderListDto,
  ): Promise<OrderList> {
    const order_list = await this.OrderListRepository.findOneBy({
      order_id: id,
    });

    order_list.order_id = updateOrderListDto.order_id;
    order_list.list_item = updateOrderListDto.list_item;
    order_list.ordered_by = updateOrderListDto.ordered_by;
    order_list.status = updateOrderListDto.status;
    order_list.date = updateOrderListDto.date;
    order_list.payment_method = updateOrderListDto.payment_method;
    order_list.price = updateOrderListDto.price;

    return this.OrderListRepository.save(order_list);
  }

  async remove(id: number): Promise<void> {
    await this.OrderListRepository.delete(id);
  }
}
