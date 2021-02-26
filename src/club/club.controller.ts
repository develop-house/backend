import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateClubDto } from './dto/club-create.dto';
import { Club } from './schemas/club.schema';
import { ClubService } from './Club.service';

@Controller('Club')
export class ClubController {
  constructor(private ClubService: ClubService) {}
  @Get('/')
  async findAll(): Promise<Club[]> {
    const ClubList = await this.ClubService.findAll();
    return ClubList;
  }

  @Post('/create')
  async create(@Body() createClubDto: CreateClubDto): Promise<Club> {
    const result = await this.ClubService.create(createClubDto);
    console.log('result', result);
    return result;
  }
}
