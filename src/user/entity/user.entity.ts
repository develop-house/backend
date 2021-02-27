import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Club } from '../../club/entity/club.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ unique: true, nullable: false })
  nickname: string;

  @Column({ default: false, nullable: false })
  blacklist_count: boolean;

  @Column({ default: null })
  disableAt: Date | null;

  @Column({ default: null })
  introduction: string | null;

  @Column({ default: null })
  photo: string | null;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ unique: true, nullable: false })
  password: string;
}
