import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import titleReducer from './titleReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  title: titleReducer,
  user: userReducer,
  modal: modalReducer,
  // routing,
});

export default rootReducer;
