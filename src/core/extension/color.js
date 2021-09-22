import {setTheme} from '../../redux/actions/action';
import store from '../../redux/store/store';

export function themeColors() {
  return store.getState('changeTheme').base.theme.color;
}

export function changeTheme(theme) {
  store.dispatch(setTheme(theme));
}
