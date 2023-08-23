import { Character } from '../../model/character';

export class ApiCharacter {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(url: string): Promise<Character[]> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}

export const gotRepo = new ApiCharacter('http://localhost:3000/characters');
