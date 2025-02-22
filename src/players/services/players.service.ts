import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) private readonly playerEntity: Repository<Player>,
  ) {}
  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    try {
      const player = await this.playerEntity.findOne({
        where: {
          name: createPlayerDto.name,
        },
        relations: ['club', 'stats'],
      });
      if (!player) {
        const newplayer = this.playerEntity.create({
          club: createPlayerDto.team,
          name: createPlayerDto.name,
          stats: createPlayerDto.stats,
        });
        return await this.playerEntity.save(newplayer);
      }
    } catch {
      throw new HttpException(
        'This player already has a team',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(): Promise<Player[]> {
    const players = await this.playerEntity.find({});
    if (!players) {
      throw new HttpException('no players found', HttpStatus.NOT_FOUND);
    }
    return players;
  }

  async findOne(id: number) {
    const player = await this.playerEntity.findOne({
      where: { id },
      relations: ['club', 'stats'],
    });
    if (player) {
      return player;
    } else {
      throw new HttpException(
        'there is no player on the database',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    try {
      const player = await this.playerEntity.findOne({
        where: { id },
        relations: ['club', 'stats'],
      });
      if (player) {
        player.club.name = updatePlayerDto?.club;
        player.stats = updatePlayerDto?.stats;
        await this.playerEntity.save(player);
      }
    } catch (err) {
      throw new HttpException(
        ' Your desired player do not exist on the database',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async remove(id: number): Promise<Player> {
    const player = await this.playerEntity.findOne({
      where: {
        id,
      },
      relations: ['club', 'stats'],
    });
    if (!player) {
      throw new HttpException('Player not found', HttpStatus.NOT_FOUND);
    }
    return await this.playerEntity.remove(player);
  }
}
