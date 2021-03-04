import { User } from 'src/user/entity/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClubType } from '../dto/club-create.dto';

@Entity()
export class Club {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: ClubType, nullable: false })
  type: string;

  @Column({ type: 'varchar', length: 300, default: null, nullable: true })
  description: string | null;

  @Column({ type: 'int', nullable: false })
  limit: number;

  @OneToMany((type) => User, (user) => user.id)
  users: User[];
}
