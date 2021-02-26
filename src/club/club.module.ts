import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClubController } from './club.controller';
import { ClubService } from './club.service';
import { Club, ClubSchema } from './schemas/club.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Club.name, schema: ClubSchema }]),
  ],
  controllers: [ClubController],
  providers: [ClubService],
})
export class ClubModule {}
