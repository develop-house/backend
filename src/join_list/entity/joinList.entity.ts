import { Club } from 'src/club/entity/club.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class JoinList {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', nullable: false, unique: true })
  userID: number;

  @OneToOne((type) => Club)
  @JoinColumn()
  club: Club;
}
