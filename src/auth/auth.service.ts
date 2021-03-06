import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/user-create.dto';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { Login } from '../type/auth';
import Bcrypt from './auth.bcrypt';
import { Message, message } from './auth.message';
import AuthVaildator from './auth.vaildator';

@Injectable()
export class AuthService {
  private bcrypt = new Bcrypt();
  private authVaildator = new AuthVaildator();
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async login(login: Login): Promise<string> {
    const user = await this.userRepository.findOne(login.email);
    if (!user) return message.user.noExisting;

    const equalPassword = await this.bcrypt.toCompare(login.password, user.password);
    if (!equalPassword) return message.password.notEqual;
    return message.success;
  }

  async join(join: CreateUserDto): Promise<string> {
    const user = await this.userRepository.findOne(join.email);
    if (user) return message.email.alreadyExisting;

    const result: Message = await this.authVaildator.join(join);
    if (result !== message.success) return result as string;

    const hashedPassword = await this.bcrypt.toHash(join.password);
    const createUser = await this.userRepository.save({
      ...join,
      password: hashedPassword,
    });
    if (!createUser) return message.user.failedJoin;

    return message.success;
  }
}
