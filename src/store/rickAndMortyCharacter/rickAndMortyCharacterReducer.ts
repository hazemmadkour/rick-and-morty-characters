import { AnyAction } from "redux";
import { CharacterModel } from "models/CharacterModel";
import { GET_CHARACTERS } from "store/ActionTypes";

type RickAndMortyCharacterDataModel = {
  characters: CharacterModel[];
  totalCount: number;
  loaded:boolean;
};

const initState: RickAndMortyCharacterDataModel = {
  characters: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      id: 4,
      name: "Beth Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      id: 5,
      name: "Jerry Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    },
    {
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      type: "",
      gender: "Female",
      location: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    },
    {
      id: 7,
      name: "Abradolf Lincler",
      status: "unknown",
      species: "Human",
      type: "Genetic experiment",
      gender: "Male",
      location: {
        name: "Testicle Monster Dimension",
        url: "https://rickandmortyapi.com/api/location/21",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    },
    {
      id: 8,
      name: "Adjudicator Rick",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    },
    {
      id: 9,
      name: "Agency Director",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    },
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
    {
      id: 11,
      name: "Albert Einstein",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
    },
    {
      id: 12,
      name: "Alexander",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      location: {
        name: "Anatomy Park",
        url: "https://rickandmortyapi.com/api/location/5",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
    },
    {
      id: 13,
      name: "Alien Googah",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "unknown",
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
    },
    {
      id: 14,
      name: "Alien Morty",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male",
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
    },
    {
      id: 15,
      name: "Alien Rick",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male",
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
    },
    {
      id: 16,
      name: "Amish Cyborg",
      status: "Dead",
      species: "Alien",
      type: "Parasite",
      gender: "Male",
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
    },
    {
      id: 17,
      name: "Annie",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      location: {
        name: "Anatomy Park",
        url: "https://rickandmortyapi.com/api/location/5",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
    },
    {
      id: 18,
      name: "Antenna Morty",
      status: "Alive",
      species: "Human",
      type: "Human with antennae",
      gender: "Male",
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
    },
    {
      id: 19,
      name: "Antenna Rick",
      status: "unknown",
      species: "Human",
      type: "Human with antennae",
      gender: "Male",
      location: {
        name: "unknown",
        url: "",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
    },
    {
      id: 20,
      name: "Ants in my Eyes Johnson",
      status: "unknown",
      species: "Human",
      type: "Human with ants in his eyes",
      gender: "Male",
      location: {
        name: "Interdimensional Cable",
        url: "https://rickandmortyapi.com/api/location/6",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
    },
  ],
  totalCount: 0,
  loaded:false
};
const reducer = (
  state = initState,
  action: AnyAction
): RickAndMortyCharacterDataModel => {
  switch (action.type) {
    case GET_CHARACTERS: {
      const { totalCount, characters } = action.payload;
      return { ...state, totalCount, characters };
    }
    default:
      return state;
  }
};

export default reducer;
