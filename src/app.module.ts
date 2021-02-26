import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ClubModule } from "./club/club.module";
import { ClubController } from './club/club.controller';
import { ClubService } from './club/club.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://db_mongo'), UserModule, ClubModule],
  controllers: [AppController, ClubController],
  providers: [AppService, ClubService],
})
export class AppModule {}
