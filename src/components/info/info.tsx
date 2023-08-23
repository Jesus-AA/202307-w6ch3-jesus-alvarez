import { Character } from '../../model/character';

type Props = {
  character: Character;
};

export function Info({ character }: Props) {
  return (
    <ul className="list-unstyled">
      {character.reignYears && <li>Años de reinado: {character.reignYears}</li>}

      <li>Arma:{character.weapon}</li>
      <li>Destreza: {character.skillLevel}</li>
      <li>Peloteo:{character.serveLevel}</li>
      <li>Asesora a:{}</li>
      <li>Sirve a:{} </li>
    </ul>
  );
}
