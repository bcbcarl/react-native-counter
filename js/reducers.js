import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const counter = handleActions({
  INCREMENT: (state) => ({
    ...state,
    count: state.count + 1
  })
}, { count: 0 });

const rootReducer = combineReducers({ counter });

export default rootReducer;
