import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from './create-player.dto';
import { abilities } from './player.dto';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
  club?: string;
  stats?: abilities;
}
