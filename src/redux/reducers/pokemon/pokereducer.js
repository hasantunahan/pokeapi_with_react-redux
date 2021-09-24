import {Case} from '../../_caselist/case';

const INITIAL_STATE = {
  favoriteList: [],
  pokeList: [],
};

export const pokereducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Case.add_favorite:
      return {...state, favoriteList: [...state.favoriteList, action.payload]};
    case Case.delete_favorite:
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          item => item.id !== action.payload.id,
        ),
      };
    case Case.catch_pokemon:
      return {...state, pokeList: [...state.pokeList, action.payload]};
    case Case.release_pokemon:
      return {
        ...state,
        pokeList: state.pokeList.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
