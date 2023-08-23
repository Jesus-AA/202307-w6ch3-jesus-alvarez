import { Character } from '../../model/character';

export class ApiCharacter {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(url: string): Promise<Character[]> {
    const response = await fetch(url);
    const data: Character[] = await response.json();
    return data;
  }
}
