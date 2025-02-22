export interface player {
  name: string;

  team: club;
  stats: abilities;
}
interface club {}
interface abilities {
  precision: number;

  speed: number;

  pass: number;

  shot: number;

  defense: number;

  dribble: number;

  overall: number;
}
