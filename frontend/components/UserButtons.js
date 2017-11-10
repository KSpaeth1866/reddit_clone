import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';
import axios from 'axios';


class UserButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  toggleLogin() {
    this.props.toggleLoginModal();
  }
  toggleRegister() {
    this.props.toggleRegisterModal();
  }
  newPost() {
    this.props.newPost();
  }
  async logout() {
    try {
      const result = await axios.get('http://localhost:3000/api/user/logout');
      this.props.logout();
    } catch (e) {
      console.log("YO FUCKED UP",e);
    }
  }
  render() {
    return (
      <div>
        <RaisedButton label="Open Login" onClick={() => this.toggleLogin()} />
        <RaisedButton label="Register" onClick={() => this.toggleRegister()} />
        <RaisedButton label="Logout" onClick={() => this.logout()} />
        <Link to="/post/new">
          <RaisedButton label="New Post" />
        </Link>
        <Link to="/">
          <RaisedButton label="Feed" />
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLoginModal: () => {
      dispatch({type: 'TOGGLE_LOGIN_MODAL'});
    },
    toggleRegisterModal: () => {
      dispatch({type: 'TOGGLE_REGISTER_MODAL'});
    },
    logout: () => {
      dispatch({type: 'LOGOUT'});
    },
    newPost: () => {
      dispatch(push('/post/new'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserButtons);
