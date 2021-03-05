import { User } from 'src/user/entity/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Setting {
  @PrimaryColumn()
  userid: string;
  // user
  @OneToOne(() => User, { cascade: true })
  @JoinColumn({ name: 'userid' })
  user: User;

  @Column({ type: 'boolean', default: true, nullable: false })
  addalarm: boolean;

  @Column({ type: 'boolean', default: true, nullable: false })
  includeTrendingRooms: boolean;

  @Column({ type: 'boolean', default: true, nullable: false })
  pauseNotifications: boolean;
}
