import { User } from 'src/user/entity/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ClubType } from '../dto/club-create.dto';

@Entity()
export class Club {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  //하나의 유저는 하나의 클럽의 모더레이터가 될 수 있다.
  @OneToOne((type)=> User, {cascade:true})
  @JoinColumn()
  moderator: User;

  @Column({ type: 'enum', enum: ClubType, nullable: false })
  type: string;

  @Column({type:'varchar', nullable:false, length:50})
  topic:string;

  @Column({ type: 'varchar', length: 300, default: null, nullable: true })
  description: string | null;

  @Column({type:'int', nullable:false})
  population:number;

  @Column({ type: 'int', nullable: false })
  limit: number;

  //하나의 클럽은 많은 유저를 가질 수 있다.
  @OneToMany((type) => User, (user) => user.id)
  users: User[];
}
