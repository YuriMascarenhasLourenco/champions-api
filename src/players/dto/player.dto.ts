import { IsNumber, IsString } from 'class-validator';
import { player } from '../types/player';

export class playerDto implements player {
  @IsString()
  name: string;
  @IsString()
  club: string;
  stats: abilities;
}
class abilities {
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
