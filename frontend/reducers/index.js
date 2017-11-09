import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import titleReducer from './titleReducer';

import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  title: titleReducer,
  modal: modalReducer,
  routing,
});

export default rootReducer;
