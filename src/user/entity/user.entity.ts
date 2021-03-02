import { Blacklist } from 'src/blacklist/entity/blacklist.entity';
import { Follow } from 'src/follow/entitiy/follow.entity';
import { UserToClub } from 'src/user_to_club/entity/userToClub.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({type:'int' })
  id: number;

  @CreateDateColumn({default:Date.now()})
  createdAt: Date;

  @Column({ type:'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type:'varchar', unique: true, nullable: false })
  password: string;

  //follow
  @OneToMany(type=>Follow, follow=>follow.follower)
  followers:Follow[];

  @ManyToMany(type=>Follow, follow=>follow.following)
  following: Follow[];

  //userToClub
  @OneToMany(type=>UserToClub, userToClub=>userToClub.userID)
  userIDs:UserToClub[];

  //blacklist
  @OneToOne(type=>Blacklist)
  @JoinColumn()
  blacklist:Blacklist;
}
