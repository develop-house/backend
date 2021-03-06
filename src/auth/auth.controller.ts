import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from '../type/auth';
import { CreateUserDto } from 'src/user/dto/user-create.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() login: Login): Promise<string> {
    return this.authService.login(login);
  }

  @Post('/join')
  async join(@Body() join: CreateUserDto): Promise<string> {
    return this.authService.join(join);
  }
}
