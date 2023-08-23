import { Character } from '../model/character';
import { Fighter } from '../model/fighter';

export interface Squire extends Character {
  serveLevel: number;
  servesTo: Fighter;
}
