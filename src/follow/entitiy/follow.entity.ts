import { User } from 'src/user/entity/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Follow {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => User, (user) => user.followers, {
    nullable: false,
    cascade: true,
  })
  follower: User;

  @ManyToOne((type) => User, (user) => user.following, {
    nullable: false,
    cascade: true,
  })
  following: User;
}
