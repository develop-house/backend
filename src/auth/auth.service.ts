import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/user-create.dto';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { Login } from '../type/auth';
import Bcrypt from './auth.bcrypt';

@Injectable()
export class AuthService {
  private bcrypt = new Bcrypt();
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async login(login: Login): Promise<string> {
    const user = await this.userRepository.findOne(login.email);
    if (!user) return 'unknown User';

    const correctPassword = await this.bcrypt.toCompare(login.password, user.password);
    if (!correctPassword) return 'not equal password';
    return 'success';
  }

  async join(join: CreateUserDto): Promise<string> {
    const user = await this.userRepository.findOne(join.email);
    if (user) return 'already existing email!';

    const hashedPassword = await this.bcrypt.toHash(join.password);
    const createUser = await this.userRepository.save({
      ...join,
      password: hashedPassword,
    });
    if (!createUser) return 'failed to create User';

    return 'Success!';
  }
}
