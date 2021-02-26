import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClubDto } from './dto/club-create.dto';
import { Club, ClubDocument } from './schemas/club.schema';

@Injectable()
export class ClubService {
    constructor(@InjectModel(Club.name) private clubModel: Model<ClubDocument>){}

    async create(createClubDto: CreateClubDto): Promise<Club> {
        const createdUser = new this.clubModel(createClubDto);
        return createdUser.save();
      }
      async findAll(): Promise<Club[]> {
        return this.clubModel.find().exec();
      }
    
}
