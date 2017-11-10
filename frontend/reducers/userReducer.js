import * as types from '../actions/types';
const generateState = () => {
  return {
    id: '',
    username: '',
  };
};

const initialState = generateState();
const userReducer = function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGOUT":
      return initialState;
    case "SUBMIT_LOGIN":
      const newState = {
        id: action.id,
        username: action.username
      };
      return newState;
    case "SUBMIT_REGISTER":
    default:
      return state;
  }
};

export default userReducer;
