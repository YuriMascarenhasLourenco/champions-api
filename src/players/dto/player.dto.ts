import { IsNumber, IsString } from 'class-validator';
import { player } from '../types/player';
import { club } from 'src/clubs/dto/club.dto';

export class playerDto implements player {
  @IsString()
  name: string;
  team: club;
  stats: abilities;
}
export class abilities {
  @IsNumber()
  id: number;
  @IsNumber()
  precision: number;
  @IsNumber()
  speed: number;
  @IsNumber()
  pass: number;
  @IsNumber()
  shot: number;
  @IsNumber()
  defense: number;
  @IsNumber()
  dribble: number;
  @IsNumber()
  overall: number;
}
