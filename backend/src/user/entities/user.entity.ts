import { MinLength } from 'class-validator';
import { Role } from 'src/role/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 30, nullable: false })
  @MinLength(6)
  username: string;

  @Column('varchar', { length: 255, nullable: false })
  @MinLength(6)
  password: string;

  @ManyToOne(() => Role, (role) => role.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'role',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'roleId',
  })
  @Column({ default: 3 })
  role: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  refreshToken: string;
}
