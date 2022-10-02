import axios from "axios";
import { AppDispatch } from "store";
import config from "config.json";
import { GET_CHARACTERS } from "store/ActionTypes";

export const getCharacters = (pageNo = 1) => {
  const url = `${config.serviceApi}/character?page=${pageNo}`;
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(url);

    return dispatch({
      type: GET_CHARACTERS,
      payload: {
        totalCount: response.data.info.count,
        characters: response.data.results,
      },
    });
  };
};
