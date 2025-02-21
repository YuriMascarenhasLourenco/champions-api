import { Controller, Get } from '@nestjs/common';
import { ClubsService } from '../service/clubs.service';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}
  @Get()
  getAllClubs() {
    return this.clubsService;
  }
}
