import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ClubController } from './club/club.controller';
import { ClubService } from './club/club.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://db_mongo'), UserModule],
  controllers: [AppController, ClubController],
  providers: [AppService, ClubService],
})
export class AppModule {}
