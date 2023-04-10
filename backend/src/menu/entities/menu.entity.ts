import { MaxLength } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
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
  @OneToOne((type) => FoodType, {
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
