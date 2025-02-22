export interface player {
  name: string;

  club: string;
  stats: abilities;
}
interface abilities {
  precision: number;

  speed: number;

  pass: number;

  shot: number;

  defense: number;

  dribble: number;

  overall: number;
}
