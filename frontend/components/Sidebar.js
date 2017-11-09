import React from 'react';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  handleNewPost() {
    // redirect to new page or maybe open modal or something
  }
  handleLogin() {
    this.props.openLoginModal();
  }
  handleRegister() {
    this.props.openRegisterModal();
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.handleNewPost}>New Post</button>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleRegister}>Register</button>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    sub: state.sub
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newPostRedirect: () => {
      dispatch({type: 'NEW_POST_REDIRECT'});
    },
    openLoginModal: () => {
      dispatch({type: 'OPEN_LOGIN_MODAL'});
    },
    openRegisterModal: () => {
      dispatch({type: 'OPEN_REGISTER_MODAL'});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
