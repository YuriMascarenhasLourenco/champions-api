import { Module } from '@nestjs/common';
import { ClubsService } from './service/clubs.service';
import { ClubsController } from './controller/clubs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './entities/clubs.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Club])],
  controllers: [ClubsController],
  providers: [ClubsService],
})
export class ClubsModule {}
