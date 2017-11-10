import React from 'react';
import { connect } from 'react-redux';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';

import axios from 'axios';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class ModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.modal,
      username: '',
      password: ''
    });
  }
  handleUsernameChange(un) {
    this.setState({
      username: un
    })
  }
  handlePasswordChange(pw) {
    this.setState({
      password: pw
    });
  }
  toggle() {
    this.props.toggleModal();
  }
  submit() {
    this.props.submitLogin(username,password)
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => this.toggle()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={() => this.submit()}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Open Login" onClick={() => this.toggle()} />
        <Dialog
          title="Login"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.toggle()}
        >
          <TextField
             hintText="Joe Shmoe"
             floatingLabelText="Username"
             onChange={() => this.handleUsernameChange()}
             value={this.state.username}
           /><br />
          <TextField
             floatingLabelText="Password"
             type="password"
             onChange={() => this.handlePasswordChange()}
           /><br />
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    modal: state.modal.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => {
      dispatch({type: 'TOGGLE_LOGIN_MODAL'});
    },
    submitLogin: () => {
      dispatch({type: "SUBMIT_LOGIN"});
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
