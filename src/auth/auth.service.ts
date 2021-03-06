import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/user-create.dto';
import { UserService } from 'src/user/user.service';
import { Login } from '../type/auth';
import Bcrypt from './auth.bcrypt';
import { Message, message } from './auth.message';
import AuthVaildator from './auth.vaildator';

@Injectable()
export class AuthService {
  private bcrypt = new Bcrypt();
  private authVaildator = new AuthVaildator();
  constructor(private userService: UserService) {}

  async login(login: Login): Promise<string> {
    const user = await this.userService.find(login.email);
    if (!user) return message.user.noExisting;

    const equalPassword = await this.bcrypt.toCompare(login.password, user.password);
    if (!equalPassword) return message.password.notEqual;
    return message.success;
  }

  async join(join: CreateUserDto): Promise<string> {
    const user = await this.userService.find(join.email);
    if (user) return message.email.alreadyExisting;

    const result: Message = await this.authVaildator.join(join);
    if (result !== message.success) return result as string;

    const hashedPassword = await this.bcrypt.toHash(join.password);
    const createUser = await this.userService.create({
      ...join,
      password: hashedPassword,
    });
    if (!createUser) return message.user.failedJoin;

    return message.success;
  }
}
