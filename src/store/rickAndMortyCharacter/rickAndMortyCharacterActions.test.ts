import { SET_LOADING, GET_CHARACTERS } from "store/actionTypes";
import ReduxThunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import config from "config.json";

import { getCharacters } from "./rickAndMortyCharacterActions";
import { CharacterModel } from "models/CharacterModel";

const store = configureMockStore([ReduxThunk])({});
const mock = new MockAdapter(axios);
const pageNo = 1;

describe("Characters", () => {
  describe("Get Characters", () => {
    const serviceURL = `${config.serviceApi}/character?page=${pageNo}`;
    beforeEach(() => {
      mock.reset();
      store.clearActions();
    });

    test("when fetched successfully", () => {
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
      mock.onGet(serviceURL).reply(200, { info: { count }, results: characters });
      return store.dispatch(getCharacters(pageNo)).then(() => {
        expect(store.getActions()).toEqual([
          { type: SET_LOADING },
          {
            type: GET_CHARACTERS,
            payload: {
              totalCount: count,
              characters,
            },
          },
        ]);
      });
    });

    // test('When fetching failed', () => {
    //   const message = 'Test';
    //   mock.onGet(url).reply(400, message);

    //   return store.dispatch(getMenu()).then(() => {
    //     expect(store.getActions()).toEqual([
    //       {
    //         type: SET_MESSAGE,
    //         payload: {message, isError: true, isDefault: false},
    //       },
    //     ]);
    //   });
    // });
  });
});
