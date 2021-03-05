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

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  nickname: string;

  //photo uri
  @Column({ type: 'varchar', length: 50, nullable: true })
  photo: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  introduction: string;

  // user
  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;
}
