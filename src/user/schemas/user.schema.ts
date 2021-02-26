import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, default: Date.now() })
  created: Date;

  @Prop({ required: true, unique: true })
  nickname: string;

  @Prop({ default: false })
  blacklist_count: boolean;

  @Prop({ default: null })
  disableAt: Date | null;

  @Prop({ default: null })
  introduction: string | null;

  @Prop({ default: null })
  photo: string | null;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
