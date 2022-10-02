import React from "react";
import { render, screen } from "@testing-library/react";
import RickAndMortyCharacters from "./RickAndMortyCharacters";

//ToDo: apply extra tests and fix this test
describe("Rick And Morty Characters", () => {
  const getCharactersFN = jest.fn();

  test("should get characters for first page", () => {
    render(<RickAndMortyCharacters />);
    expect(getCharactersFN).toHaveBeenCalledWith(1);
  });
});
