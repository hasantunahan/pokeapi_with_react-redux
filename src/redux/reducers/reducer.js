import {config} from '../../core/init/config/config';
import {lightTheme} from '../../core/init/theme/apptheme';
import {Case} from '../_caselist/case';

const INITIAL_STATE = {
  theme: lightTheme,
  config: config,
  header : 'Pokedex'
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Case.changeTheme:
      return {...state, theme: action.payload};
    case Case.config:
      return {...state, config: action.payload};
    case Case.header:
      return {...state , header : action.payload}
    default:
      return state;
  }
};
