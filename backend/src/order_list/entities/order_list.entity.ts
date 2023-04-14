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

  @Column('text', { array: true })
  list_item: string[];

  @Column()
  @ManyToOne((type) => User, {
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
  @ManyToOne((type) => Status, {
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
}
