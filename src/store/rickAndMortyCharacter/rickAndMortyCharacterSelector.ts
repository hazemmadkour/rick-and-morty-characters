import { AppState } from "store";

export const charactersSelector = (state:AppState) =>state.rickAndMortyCharacterData?.characters;
export const charactersCountSelector = (state:AppState) =>state.rickAndMortyCharacterData?.totalCount;
export const charactersloadedSelector = (state:AppState) =>state.rickAndMortyCharacterData?.loaded;