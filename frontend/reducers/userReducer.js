import * as types from '../actions/types';
import axios from 'axios';
const generateState = () => {
  return {
    user: {},
  };
};

const initialState = generateState();

const modalReducer = async function(state = initialState, action) {
  switch (action.type) {
    case "SUBMIT_LOGIN":
      const {user} = await axios.post('http://localhost:3000/#/api/user/login', {
        username: action.username,
        password: action.password
      });
      return // TODO: new stat;
    case "SUBMIT_REGISTER":
      const result = await axios.post('http://localhost:3000/#/api/user/register', {
        username: action.username,
        password: action.password
      });
      return // TODO: new state;
    default:
      return state;
  }
};

export default modalReducer;
