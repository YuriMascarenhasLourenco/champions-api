import { IsNumber, IsString } from 'class-validator';
import { player } from 'src/players/types/player';

export class club {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  player: player[];
}
