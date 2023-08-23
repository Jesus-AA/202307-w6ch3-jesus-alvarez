import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiCharacter } from '../components/services/api.characters';
import { loadThunk } from '../redux/got.thunks';
import { AppDispatch, RootState } from '../store/store';

export function useCharacters() {
  const repo = useMemo(
    () => new ApiCharacter('http://localhost:3000/characters'),
    []
  );

  const charactersState = useSelector((state: RootState) => state.gotChars);
  const dispatch = useDispatch<AppDispatch>();

  const loadCharacters = useCallback(async () => {
    dispatch(loadThunk(repo));
  }, [repo, dispatch]);

  return {
    loadCharacters,
    charactersState,
  };
}
