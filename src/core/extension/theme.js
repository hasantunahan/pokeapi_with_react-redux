import store from "../../redux/store/store";

export function getTheme() {
    return store.getState('changeTheme').base.theme;
  }