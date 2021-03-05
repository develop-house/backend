import { User } from 'src/user/entity/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Setting {
  // user
  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;

  @Column({ type: 'boolean', default: true, nullable: false })
  addalarm: boolean;

  @Column({ type: 'boolean', default: true, nullable: false })
  includeTrendingRooms: boolean;

  @Column({ type: 'boolean', default: true, nullable: false })
  pauseNotifications: boolean;
}
