import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { ClubsModule } from './clubs/clubs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Abilities } from './players/entities/abilities.entity';
import { Player } from './players/entities/player.entity';
import { Club } from './clubs/entities/clubs.entity';
@Module({
  imports: [
    PlayersModule,
    ClubsModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // Ou 'mysql', 'sqlite', etc.
      host: 'localhost',
      port: 5432, // Ajuste conforme necessário
      username: 'root',
      password: '1234',
      database: 'bomba-patch',
      entities: [Abilities, Player, Club],
      synchronize: true, // Apenas para desenvolvimento (cria tabelas automaticamente)
    }),
  ],
})
export class AppModule {}
