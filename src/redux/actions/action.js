export const setTheme = theme => dispatch => {
  console.log(theme);
  dispatch({type: 'changeTheme', payload: theme});
};

export const setConfig = config => dispatch => {
  dispatch({type: 'config', payload: config});
};

export const setHeader = text => dispatch => {
  dispatch({type: 'changeHeader', payload: text});
};
