import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ClubType} from '../dto/club-create.dto';

export type ClubDocument = Club & Document;

@Schema()
export class Club {
  
  @Prop({ required: true,  enum:ClubType})
  type:string

  @Prop({ default: null })
  description: string | null;

  @Prop({ require:true })
  limit: number;
}

export const ClubSchema = SchemaFactory.createForClass(Club);
