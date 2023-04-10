import { MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  type: number;

  @Column()
  product_weight: number;

  @Column()
  price: number;
}
