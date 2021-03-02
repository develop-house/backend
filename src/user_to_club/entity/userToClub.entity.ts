import { Club } from 'src/club/entity/club.entity';
import { User } from 'src/user/entity/user.entity';
import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class UserToClub {
    @PrimaryGeneratedColumn({type:'int'})
    id:number;

    @ManyToOne(type=>Club, club=>club.clubIDs)
    clubID:Club;

    @ManyToOne(type=>User, user=>user.userIDs)
    userID:User;

    @Column({type:'int', nullable:false, default:0})
    population:number;
  }
  