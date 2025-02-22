import { Club } from 'src/clubs/entities/clubs.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Abilities } from './abilities.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Club, (club) => club.player)
  club: Club;
  @Column()
  name: string;
  @OneToOne(() => Abilities, (item) => item.id)
  @JoinColumn()
  stats: Abilities;
}
