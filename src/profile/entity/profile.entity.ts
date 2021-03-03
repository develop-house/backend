import { User } from 'src/user/entity/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  nickname: string;

  //photo uri
  @Column({ nullable: true })
  photo: string;

  @Column({ nullable: true })
  introduction: string;

  // user
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
