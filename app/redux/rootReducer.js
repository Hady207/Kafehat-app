import { combineReducers } from 'redux';
import { rootScreenReducer as root } from '_containers/RootScreen/reducer';
import { loginReducer as login } from '_containers/Login/reducer';
import { homeReducer as home } from '_containers/Home/reducer';
import { friendsReducer as friends } from '_containers/Friends/reducer';

const rootReducer = combineReducers({
  root,
  home,
  login,
  friends,
});

export default rootReducer;
