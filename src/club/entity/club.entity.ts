import { JoinList } from 'src/join_list/entity/joinList.entity';
import { UserToClub } from 'src/user_to_club/entity/userToClub.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClubType } from '../dto/club-create.dto';

@Entity()
export class Club {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: ClubType, nullable: false })
  type: string;

  @Column({ default: null })
  description: string | null;

  @Column({ nullable: false })
  limit: number;

  @OneToMany((type) => UserToClub, (userToClub) => userToClub.clubID)
  clubIDs: UserToClub[];

  @OneToOne((type) => JoinList)
  @JoinColumn()
  joinList: JoinList;
}
