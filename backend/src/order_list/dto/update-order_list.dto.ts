import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderListDto } from './create-order_list.dto';

export class UpdateOrderListDto extends PartialType(CreateOrderListDto) {}
