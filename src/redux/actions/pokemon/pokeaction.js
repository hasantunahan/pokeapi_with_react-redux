import { Case } from '../../_caselist/case';

export const addFavorite = data => dispatch => {
  dispatch({type: Case.add_favorite, payload: data});
};

export const removeFavorite = data => dispatch => {
  dispatch({type: Case.delete_favorite, payload: data});
};
