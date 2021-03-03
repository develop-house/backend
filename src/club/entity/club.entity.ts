import { User } from 'src/user/entity/user.entity';
import { UserToClub } from 'src/user_to_club/entity/userToClub.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToMany((type)=>User, (user)=>user.id)
  users:User[];
}
