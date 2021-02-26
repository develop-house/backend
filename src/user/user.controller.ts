import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  async findAll(): Promise<User[]> {
    const userList = await this.userService.findAll();
    return userList;
  }

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const result = await this.userService.create(createUserDto);
    console.log('result', result);
    return result;
  }
}
