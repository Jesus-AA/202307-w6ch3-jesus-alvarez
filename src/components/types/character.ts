export type CharacterNoId = {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  reignYears?: number;
  weapon?: string;
  skillLevel?: number;
  adviseTo?: CharacterNoId;
  serveLevel?: number;
  servesTo?: CharacterNoId;
};

// Cuando una propiedad de un tipo es opcional, se coloca un signo de interrogación como arriba.

export type Character = CharacterNoId & { id: number };
