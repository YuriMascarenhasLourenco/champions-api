import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from '../entities/clubs.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(Club) private readonly repo: Repository<Club>,
  ) {}
  async getClubs(): Promise<Club[]> {
    const clubs = await this.repo.find({});
    if (!clubs) {
      throw new HttpException(
        'There is no clubs on the database, would you like to add one?',
        HttpStatus.NOT_FOUND,
      );
    }
    return clubs;
  }
}
