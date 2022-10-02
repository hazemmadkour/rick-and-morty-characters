import React from "react";
import { render, screen } from "@testing-library/react";
import Character from "./Character";
import { CharacterModel } from "models/CharacterModel";

describe("Rick And Morty Character with all info", () => {
  const character:CharacterModel = {
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
  };
  
  test("renders image successfully", () => {
    render(<Character data={character} />);
    const element = screen.getByTestId('character-img') as HTMLImageElement;
    expect(element.src).toEqual(character.image);
  });
  
  test("renders name successfully", () => {
    render(<Character data={character} />);
    const element = screen.getByTestId('character-name');
    expect(element.innerHTML).toEqual(character.name);
  });
  
  test("renders info successfully", () => {
    render(<Character data={character} />);
    const element = screen.getByTestId('character-info');
    expect(element.innerHTML).toEqual(`${character.status} - ${character.species}`);
  });
  
  test("renders location successfully", () => {
    render(<Character data={character} />);
    const element = screen.getByTestId('character-location');
    expect(element.innerHTML).toEqual(character.location.name);
  });
  
  test("renders type successfully", () => {
    render(<Character data={character} />);
    const element = screen.getByTestId('character-type');
    expect(element.innerHTML).toEqual(character.type);
  });
});

describe("Rick And Morty Character without type", () => {
    const character:CharacterModel = {
      id: 10,
      name: "Alan Rails",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      location: {
        name: "Worldender's lair",
        url: "https://rickandmortyapi.com/api/location/4",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    };
    
    test("dont render character type", async() => {
      render(<Character data={character} />);
      const element = screen.queryByTestId('character-type');
      expect(element).toBeFalsy();
    });
  });
