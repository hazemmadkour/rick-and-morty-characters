import axios from "axios";
import { AppDispatch } from "store";
import config from "config.json";
import { GET_CHARACTERS, SET_LOADING } from "store/actionTypes";

//TODO: need to find a way to fix types at redux
export const getCharacters = (pageNo = 1): any => {
  const url = `${config.serviceApi}/character?page=${pageNo}`;

  return async (dispatch: AppDispatch) => {
    dispatch({ type: SET_LOADING });

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
