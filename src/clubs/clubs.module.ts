import { Module } from '@nestjs/common';
import { ClubsService } from './service/clubs.service';
import { ClubsController } from './controller/clubs.controller';

@Module({
  controllers: [ClubsController],
  providers: [ClubsService],
})
export class ClubsModule {}
