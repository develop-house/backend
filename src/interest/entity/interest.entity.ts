import { User } from 'src/user/entity/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Setting {
  // user
  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;

  //todo : 관심분야 목록 나열
}
