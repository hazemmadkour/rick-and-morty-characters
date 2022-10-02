export type CharacterModel = {
  id: number;
  name: string;
  status: string;
  species: string;
  type:string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
  image: string;
};
