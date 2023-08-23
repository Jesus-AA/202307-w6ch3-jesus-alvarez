import { Character } from './character';
import { Fighter } from './fighter';

export interface Squire extends Character {
  serveLevel: number;
  servesTo: Fighter;
}
