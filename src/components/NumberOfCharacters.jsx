/**
 * Component to display the number of characters
 * @param {*} characters - List of characters 
 */
export function NumberOfCharacters({ characters = [] }) {
  // if characters is empty, then display "There is no character"
  if (characters.length === 0) {
    return <p>There is no character</p>;
  }

  // if characters has one character, then display "There is 1 character" else display "There are {characters.length} characters"
  return characters.length === 1 ? <p>There is 1 character</p> : <p>There are {characters.length} characters</p>;
}