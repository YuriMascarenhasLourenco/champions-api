import { Module } from '@nestjs/common';
import { PlayersService } from './services/players.service';
import { PlayersController } from './controllers/players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Abilities } from './entities/abilities.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Player,Abilities])],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
