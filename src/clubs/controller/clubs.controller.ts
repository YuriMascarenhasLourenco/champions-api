import { Controller, Get } from '@nestjs/common';
import { ClubsService } from '../service/clubs.service';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}
  @Get()
  async getAllClubs() {
    return await this.clubsService.getClubs();
  }
}
