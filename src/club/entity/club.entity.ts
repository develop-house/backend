import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClubType } from '../dto/club-create.dto';
import { User } from '../../user/entity/user.entity';

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ClubType, nullable: false })
  type: string;

  @Column({ default: null })
  description: string | null;

  @Column({ nullable: false })
  limit: number;
}
