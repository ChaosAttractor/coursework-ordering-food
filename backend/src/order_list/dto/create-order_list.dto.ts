export class CreateOrderListDto {
  order_id: number;
  list_item: string;
  ordered_by: number;
  status: number;
  date: Date;
  payment_method: number;
  price: number;
}
