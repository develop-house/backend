import { Follow } from 'src/follow/entitiy/follow.entity';
import { UserToClub } from 'src/user_to_club/entity/userToClub.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  password: string;

  //follow
  @OneToMany((type) => Follow, (follow) => follow.follower)
  followers: Follow[];

  @ManyToMany((type) => Follow, (follow) => follow.following)
  following: Follow[];

  //userToClub
  @OneToMany((type) => UserToClub, (userToClub) => userToClub.userID)
  userIDs: UserToClub[];
}
