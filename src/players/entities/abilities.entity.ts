import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Abilities {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  precision: number;
  @Column()
  speed: number;
  @Column()
  pass: number;
  @Column()
  shot: number;
  @Column()
  defense: number;
  @Column()
  dribble: number;
  @Column()
  overall: number;
}
