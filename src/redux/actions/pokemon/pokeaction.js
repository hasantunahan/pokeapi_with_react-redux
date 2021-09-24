import {Case} from '../../_caselist/case';

export const addFavorite = data => dispatch => {
  dispatch({type: Case.add_favorite, payload: data});
};

export const removeFavorite = data => dispatch => {
  dispatch({type: Case.delete_favorite, payload: data});
};

export const catchPokemon = data => dispatch => {
  dispatch({type: Case.catch_pokemon, payload: data});
};

export const releasePokemon = data => dispatch => {
  dispatch({type: Case.release_pokemon, payload: data});
};
