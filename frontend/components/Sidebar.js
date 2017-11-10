import React from 'react';
import { connect } from 'react-redux';
import {Dialog, FlatButton, RaisedButton} from 'material-ui';
import ModalLogin from './modalLogin';
import ModalRegister from './modalRegister';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalL: false
    };
  }
  handleNewPost() {
    console.log("REDIRECT TO NEW POST PAGE\n NONE YET😫");
    // TODO: create new post page and finish route
  }
  render() {
    return (
      <div>
        <RaisedButton label="New Post" onClick={this.handleNewPost}/>
        <ModalLogin />
        <ModalRegister />

      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,

    sub: state.sub,
    modal: state.modal,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newPostRedirect: () => {
      dispatch({type: 'NEW_POST_REDIRECT'});
    },
    openLoginModal: () => {

      dispatch({type: 'TOGGLE_LOGIN_MODAL'});
    },
    openRegisterModal: () => {
      dispatch({type: 'TOGGLE_REGISTER_MODAL'});

    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
