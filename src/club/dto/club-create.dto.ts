import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export type ClubType = "public" | 'social' | 'private';

export class CreateClubDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly type: ClubType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly limit: number;
}
