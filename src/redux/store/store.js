import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {pokereducer} from '../reducers/pokemon/pokereducer';
import {reducer} from '../reducers/reducer';

const store = createStore(
  combineReducers({
      base : reducer,
      pokemon : pokereducer
  }),
  applyMiddleware(thunk),
);
export default store;
