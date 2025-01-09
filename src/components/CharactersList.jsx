import { Link } from "react-router-dom";
import { DisplayDate } from "./DisplayDate";

/**
 * Component that displays a list of characters
 * @param {*} characters - List of characters 
 */
export function CharactersList({ characters = [] }) {
  return (
    <ul id="characters">
      {characters.map((character) => (
        <li key={character.id}>
          <Link to={`/characters/${character.id}`}>
            <strong>{character.name}</strong> - <small><DisplayDate date={character.modified} /></small>
          </Link>
        </li>
      ))}
    </ul>
  );
}
