import { Character } from './character';

export interface Advisor extends Character {
  adviseTo: Character;
  message: 'I dunno know why, but I believe I am gonna die soon';
}
