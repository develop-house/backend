import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ClubModule } from "./club/club.module";

@Module({
  imports: [MongooseModule.forRoot('mongodb://db_mongo'), UserModule, ClubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
