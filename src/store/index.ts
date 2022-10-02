import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import rickAndMortyCharacterReducer from './rickAndMortyCharacter/rickAndMortyCharacterReducer';

const reducers = {
    rickAndMortyCharacterData: rickAndMortyCharacterReducer
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  composeEnhancer(applyMiddleware(ReduxThunk))
);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export { store };
