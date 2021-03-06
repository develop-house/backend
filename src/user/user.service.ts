import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/user-create.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async find(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }
}
