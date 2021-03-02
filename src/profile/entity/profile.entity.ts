import { User } from 'src/user/entity/user.entity';
import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class Profile {
    @PrimaryGeneratedColumn({type:'int'})
    id:number;

    @OneToOne(type=>User, user=>user.id)
    userid:number;

    @Column({unique:true, nullable:false})
    nickname:string;

    //photo uri
    @Column({nullable:true})
    photo:string;

    @Column({nullable:true})
    introduction:string;
  }
  