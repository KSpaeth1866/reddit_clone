import * as types from '../actions/types';

const generateState = () => {
  return {
    login: false,
    register: false
  };
};

const initialState = generateState();

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LOGIN_MODAL":
      return Object.assign({}, state, {login: !state.login});
    case "TOGGLE_REGISTER_MODAL":
      return Object.assign({}, state, {register: !state.register});
    default:
      return state;
  }
};

export default modalReducer;
