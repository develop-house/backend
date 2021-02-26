import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export const ClubType:string[] = ['public', 'social', 'private'];

export class CreateClubDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly limit: number;
}
