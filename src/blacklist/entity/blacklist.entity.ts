import { User } from 'src/user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Blacklist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: false, nullable: false, default: 0 })
  count: number;

  @CreateDateColumn({ type: 'timestamp', default: null, nullable: true })
  disableAt: Date;

  //blacklist
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
