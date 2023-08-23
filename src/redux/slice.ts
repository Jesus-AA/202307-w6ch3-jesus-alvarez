import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../model/character';
import { loadThunk } from './got.thunks';

export type CharacterState = {
  characters: Character[];
  loadState: 'loading' | 'loaded' | '' | 'error';
};

const initialState: CharacterState = {
  characters: [],
  loadState: '',
};

const gotSlice = createSlice({
  name: 'gots',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadThunk.pending, (state) => {
      state.loadState = 'loading';
    });
    builder.addCase(
      loadThunk.fulfilled,
      (state, { payload }: { payload: Character[] }) => {
        state.characters = payload;
        state.loadState = 'loaded';
      }
    );
  },
});

export const actions = gotSlice.actions;
export default gotSlice.reducer;
