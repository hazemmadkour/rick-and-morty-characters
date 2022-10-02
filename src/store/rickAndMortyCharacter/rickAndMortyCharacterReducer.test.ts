import { CharacterModel } from "models/CharacterModel";
import { GET_CHARACTERS, SET_LOADING } from "store/actionTypes";

import rickAndMortyCharacterReducer from "./rickAndMortyCharacterReducer";

describe("rickAndMortyCharacter Reducer", () => {
  const count = 100;
  const characters: CharacterModel[] = [
    {
      id: 10,
      name: "Alan Rails",
      status: "Dead",
      species: "Human",
      type: "Superhuman (Ghost trains summoner)",
      gender: "Male",
      location: {
        name: "Worldender's lair",
        url: "https://rickandmortyapi.com/api/location/4",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    },
  ];

  test("should be initialized", () => {
    expect(rickAndMortyCharacterReducer()).toEqual({
      characters: [],
      totalCount: 0,
      loaded: false,
    });
  });

  test("Should store characters", () => {
    const payload = { totalCount: count, characters };
    expect(
      rickAndMortyCharacterReducer(undefined, { type: GET_CHARACTERS, payload })
    ).toEqual({ characters, totalCount: count, loaded: true });
  });

  test("Should swap to loading state", () => {
    expect(
      rickAndMortyCharacterReducer(undefined, { type: SET_LOADING })
    ).toEqual({ characters: [], totalCount: 0, loaded: false });
  });
});
