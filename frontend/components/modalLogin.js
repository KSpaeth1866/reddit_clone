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
  handleUsernameChange(e) {
    const un = e.target.value;
    this.setState({
      username: un
    });
  }
  handlePasswordChange(e) {
    const pw = e.target.value;
    this.setState({
      password: pw
    });
  }
  toggle() {
    this.props.toggleModal();
  }
  async submit() {
    try {
      const result = await axios.post('http://localhost:3000/api/user/login', {
        username: this.state.username,
        password: this.state.password,
      });
      console.log(result.data.user);
      this.props.submitLogin(result.data.user.username, result.data.user.id);
      this.toggle();
    } catch (e) {
      console.log("YO FUCKED UP", e);
    }
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onClick={() => this.toggle()}
      />,
      <FlatButton
        label="Submit"
        onClick={() => this.submit()}
      />,
    ];

    return (
      <div>
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
             onChange={(e) => this.handleUsernameChange(e)}
             value={this.state.username}
           /><br />
          <TextField
             floatingLabelText="Password"
             type="password"
             onChange={(e) => this.handlePasswordChange(e)}
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
    submitLogin: (un, id) => {
      dispatch({type: "SUBMIT_LOGIN", username: un, id: id});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
