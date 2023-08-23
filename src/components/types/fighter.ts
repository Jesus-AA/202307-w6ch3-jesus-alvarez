import { Character } from './character';

export interface Fighter extends Character {
  weapon: string;
  skillLevel: number;
  message: 'I hit first and ask later';
}
