import { User } from 'src/user/entity/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Interest {
  @PrimaryColumn()
  userid: string;
  // user
  @OneToOne(() => User, { cascade: true })
  @JoinColumn({ name: 'userid' })
  user: User;

  //todo : 관심분야 목록 나열
}
