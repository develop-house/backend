import { Body, Controller, Get, Post } from '@nestjs/common';
import { resolve } from 'path';
import { CreateUserDto } from './dto/user-create.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  findAll(): void {
    const userList = this.userService.findAll();
    userList.then(
      (res) => {
        console.log(res);
      },
      (error) => console.log(error),
    );
  }

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto): void {
    const result = this.userService.create(createUserDto);
    result.then(
      (res) => {
        console.log('Success!');
      },
      (error) => console.log(':failed create user info'),
    );
  }
}
