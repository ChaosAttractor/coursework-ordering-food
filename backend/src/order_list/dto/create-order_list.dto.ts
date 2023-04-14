import { Entity } from 'typeorm';

@Entity()
export class CreateOrderListDto {
  order_id: number;
  list_item: string[];
  ordered_by: number;
  status: number;
}
