import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/club-create.dto';
import { Club } from './entity/club.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club)
    private clubRepository: Repository<Club>,
  ) {}

  async create(createClubDto: CreateClubDto): Promise<Club> {
    return this.clubRepository.save(createClubDto);
  }
  async findAll(): Promise<Club[]> {
    return this.clubRepository.find();
  }
}
