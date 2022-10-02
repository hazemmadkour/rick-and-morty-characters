import { AnyAction } from "redux";
import { CharacterModel } from "models/CharacterModel";
import { GET_CHARACTERS, SET_LOADING } from "store/ActionTypes";

type RickAndMortyCharacterDataModel = {
  characters: CharacterModel[];
  totalCount: number;
  loaded: boolean;
};

const initState: RickAndMortyCharacterDataModel = {
  characters: [],
  totalCount: 0,
  loaded: false,
};
const reducer = (
  state = initState,
  action: AnyAction
): RickAndMortyCharacterDataModel => {
  switch (action.type) {
    case GET_CHARACTERS: {
      const { totalCount, characters } = action.payload;
      return { ...state, totalCount, characters, loaded: true };
    }
    case SET_LOADING:
      return { ...state, loaded: false };
    default:
      return state;
  }
};

export default reducer;
