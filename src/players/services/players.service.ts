import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { playerDto } from '../dto/player.dto';

@Injectable()
export class PlayersService {
  constructor(private readonly playerEntity: Repository<Player>) {}
  async create(createPlayerDto: CreatePlayerDto) {
    try {
      const player = await this.playerEntity.findOne({
        where: {
          name: createPlayerDto.name,
          club: { name: createPlayerDto.club },
        },
      });
      if (!player) {
        return await this.playerEntity.create({
          name: createPlayerDto.name,
          stats: createPlayerDto.stats,
          club: createPlayerDto.club,
        });
      }
    } catch (err) {
      throw new HttpException(
        'This player already has a team',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(): Promise<playerDto | null> {
    const players = await this.playerEntity.find({});
    if (players) {
      return;
    }
  }

  async findOne(id: number) {
    const player = await this.playerEntity.findOne({
      where: { id },
      relations: { club, stats },
    });
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  async remove(id: number) {
    const player= await this.playerEntity.findOne({
      where:{
        id,
      }
    })
    if(player){
      
    }
  }
}
