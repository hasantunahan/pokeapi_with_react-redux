import { Case } from "../_caselist/case";

export const setTheme = theme => dispatch => {
  console.log(theme);
  dispatch({type: Case.changeTheme, payload: theme});
};

export const setConfig = config => dispatch => {
  dispatch({type: Case.config, payload: config});
};

export const setHeader = text => dispatch => {
  dispatch({type: Case.header, payload: text});
};
