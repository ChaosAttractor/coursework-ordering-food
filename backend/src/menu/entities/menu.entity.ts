import { MaxLength } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FoodType } from 'src/food_type/entities/food_type.entity';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  @MaxLength(100)
  product_name: string;

  @Column()
  @MaxLength(100)
  image: string;

  @Column()
  @ManyToOne(() => FoodType, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'type',
    referencedColumnName: 'type_id',
    foreignKeyConstraintName: 'typeId',
  })
  type: number;

  @Column()
  product_weight: number;

  @Column()
  price: number;
}
