import { combineReducers } from 'redux';
import { homeReducer as home } from '_screens/Home/reducer';

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
