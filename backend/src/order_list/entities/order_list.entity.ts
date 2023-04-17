import { PaymentMethod } from 'src/payment_method/entities/payment_method.entity';
import { Status } from 'src/status/entities/status.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderList {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  list_item: string;

  @Column()
  @ManyToOne(() => User, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'ordered_by',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'userId',
  })
  ordered_by: number;

  @Column()
  @ManyToOne(() => Status, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'status',
    referencedColumnName: 'status_id',
    foreignKeyConstraintName: 'statusId',
  })
  status: number;

  @Column()
  date: Date;

  @Column()
  @ManyToOne(() => PaymentMethod, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'payment_method',
    referencedColumnName: 'payment_id',
    foreignKeyConstraintName: 'paymentId',
  })
  payment_method: number;

  @Column()
  price: number;
}
