import { Module } from '@nestjs/common';
import { OrderListService } from './order_list.service';
import { OrderListController } from './order_list.controller';
import { OrderList } from './entities/order_list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OrderList])],
  controllers: [OrderListController],
  providers: [OrderListService],
})
export class OrderListModule {}
