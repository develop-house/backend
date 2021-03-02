import { User } from 'src/user/entity/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
  } from 'typeorm';
  
  @Entity()
  export class Blacklist {
    @OneToOne(type=>User, user=>user.id)
    userid:number;

    @Column({unique:false, nullable:false, default:0})
    nickname:number;

    @CreateDateColumn({nullable:true, default:null})
    disableAt:Date;
  }
  