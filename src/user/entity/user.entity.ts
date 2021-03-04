import { Club } from 'src/club/entity/club.entity';
import { Follow } from 'src/follow/entitiy/follow.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  createdAt: Date;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  password: string;

  //follow
  @OneToMany((type) => Follow, (follow) => follow.follower)
  followers: Follow[];

  @ManyToMany((type) => Follow, (follow) => follow.following)
  following: Follow[];

  @ManyToOne((type) => Club, (club) => club.users)
  clubID: Club;
}
