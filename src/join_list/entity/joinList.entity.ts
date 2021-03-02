import { Club } from 'src/club/entity/club.entity';
import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class JoinList {
    @PrimaryGeneratedColumn({type:'int'})
    id:number;

    @Column({type:'int', nullable:false, unique:true})
    userID:number;
  }
  