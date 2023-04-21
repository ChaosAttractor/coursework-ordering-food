import { Injectable } from '@nestjs/common';
import { CreateOrderListDto } from './dto/create-order_list.dto';
import { UpdateOrderListDto } from './dto/update-order_list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderList } from './entities/order_list.entity';
import { Repository } from 'typeorm';
import { Response, Request } from 'express';

@Injectable()
export class OrderListService {
  constructor(
    @InjectRepository(OrderList)
    private readonly OrderListRepository: Repository<OrderList>,
  ) {}

  create(
    createOrderListDto: CreateOrderListDto,
    req: Request,
  ): Promise<OrderList> {
    const order_list = new OrderList();

    order_list.order_id = createOrderListDto.order_id;
    order_list.list_item = createOrderListDto.list_item;
    order_list.ordered_by = req.cookies.userId;
    order_list.status = createOrderListDto.status;
    order_list.date = createOrderListDto.date;
    order_list.payment_method = createOrderListDto.payment_method;
    order_list.price = createOrderListDto.price;

    return this.OrderListRepository.save(order_list);
  }

  async findAll(): Promise<OrderList[]> {
    return await this.OrderListRepository.find({
      order: { order_id: 'DESC' },
    });
  }

  async findAllUserOrder(req: Request): Promise<OrderList[]> {
    return await this.OrderListRepository.find({
      where: { ordered_by: req.cookies.userId },
      order: { order_id: 'DESC' },
    });
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

    order_list.status = updateOrderListDto.status;

    return this.OrderListRepository.save(order_list);
  }

  async remove(id: number): Promise<void> {
    await this.OrderListRepository.delete(id);
  }
}
