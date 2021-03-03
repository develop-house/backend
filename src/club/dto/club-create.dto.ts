import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export const ClubType: string[] = ['public', 'social', 'private'];

export class CreateClubDto {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ enum: ClubType, default: 'public' })
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'public room' })
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 10 })
  readonly limit: number;
}
