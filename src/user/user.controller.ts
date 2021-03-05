import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const result = await this.userService.create(createUserDto);
    console.log('result', result);
    return result;
  }
}
