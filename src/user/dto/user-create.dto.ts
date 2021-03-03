import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsDate()
  readonly created: Date;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ default: 'abc@abc.com' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ default: '1234' })
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ default: 'adc' })
  readonly nickname: string;
}
