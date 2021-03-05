import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateClubDto } from './dto/club-create.dto';
import { Club } from './entity/club.entity';
import { ClubService } from './club.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Club')
@Controller('club')
export class ClubController {
  constructor(private clubService: ClubService) {}
  @Get('/')
  async findAll(): Promise<Club[]> {
    return await this.clubService.findAll();
  }

  @Post('/create')
  async create(@Body() createClubDto: CreateClubDto): Promise<Club> {
    const result = await this.clubService.create(createClubDto);
    console.log('result', result);
    return result;
  }
}
