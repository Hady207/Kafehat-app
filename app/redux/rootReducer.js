import { combineReducers } from 'redux';
import { rootScreenReducer as root } from '_screens/RootScreen/reducer';
import { loginReducer as login } from '_screens/Login/reducer';
import { homeReducer as home } from '_screens/Home/reducer';

const rootReducer = combineReducers({
  root,
  home,
  login,
});

export default rootReducer;
