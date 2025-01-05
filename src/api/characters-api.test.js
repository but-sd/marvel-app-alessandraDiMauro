import { getCharacters, getCharacterById } from "./characters-api";

const characterOne = {
  id: 1,
  name: "Character One",
  modified: "2014-01-13T14:48:32-0500",
};
const characterTwo = {
  id: 2,
  name: "Character Two",
  modified: "2014-01-12T14:48:32-0500",
};
const characterThree = {
  id: 3,
  name: "Character Three",
  modified: "2014-01-11T14:48:32-0500",
};
const characterFour = {
  id: 4,
  name: "Character Four",
  modified: "2014-01-14T14:48:32-0500",
};

// Mock the characters.json file to avoid reading the file
jest.mock("../data/characters.json", () => [
  characterOne,
  characterTwo,
  characterThree,
  characterFour,
]);

describe("characters-api", () => {
  describe("getCharacters", () => {
    it("should return the list of characters sorted by name in ascending order by default", () => {
      // when

      // then
      const result = getCharacters();

      // expect
      expect(result[0]).toEqual(characterFour);
      expect(result[1]).toEqual(characterOne);
      expect(result[2]).toEqual(characterThree);
      expect(result[3]).toEqual(characterTwo);
    });

    it("should return the list of characters sorted by name in descending order when order is desc", () => {
      // when

      // then
      const result = getCharacters("name", "desc");

      // expect
      expect(result[0]).toEqual(characterTwo);
      expect(result[1]).toEqual(characterThree);
      expect(result[2]).toEqual(characterOne);
      expect(result[3]).toEqual(characterFour);
    });

    it("should return the list of characters sorted by modified in ascending order when orderBy is modified", () => {
      // when

      // then
      const result = getCharacters("modified");

      // expect
      expect(result[0]).toEqual(characterThree);
      expect(result[1]).toEqual(characterTwo);
      expect(result[2]).toEqual(characterOne);
      expect(result[3]).toEqual(characterFour);
    });
  });

  describe("getCharacterById", () => {
    it("should return the correct character when a valid ID is provided", () => {
      const result = getCharacterById(1);
      expect(result).toEqual(characterOne);
    });

    it("should throw an error when an invalid ID is provided", () => {
      expect(() => getCharacterById(999)).toThrow(
        "Character with id 999 not found"
      );
    });
  });
});
