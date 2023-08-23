import { useEffect } from 'react';

import { useCharacters } from '../../hooks/hook';
import { Card } from '../card/card_1';

import { Info } from '../info/info';

export function Characters() {
  const { loadCharacters, charactersState } = useCharacters();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          {charactersState.characters.map((item) => (
            <Card key={item.id} character={item}>
              <Info character={item}></Info>
            </Card>
          ))}
        </ul>
      </div>
    </>
  );
}
