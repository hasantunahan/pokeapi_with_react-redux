const INITIAL_STATE = {
  data: [],
};

export const pokereducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'setData':
      return {...state, theme: action.payload};
    default:
      return state;
  }
};
