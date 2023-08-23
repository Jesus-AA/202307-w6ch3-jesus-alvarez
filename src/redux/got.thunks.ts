import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiCharacter } from '../components/services/api.characters';
import { Character } from '../model/character';

export const loadThunk = createAsyncThunk<Character[], ApiCharacter>(
  'gots/load',
  async (repo) => {
    const characters = await repo.getAll('http://localhost:3000/characters');
    return characters;
  }
);
