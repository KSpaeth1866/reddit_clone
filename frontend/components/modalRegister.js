import React from 'react';
import { connect } from 'react-redux';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';

class ModalRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: "",
      password: "",
      password2: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.modal
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
  handlePassword2Change(e) {
    const pw = e.target.value;
    this.setState({
      password2: pw
    });
  }
  toggle() {
    this.props.toggleModal();
  }
  submit() {
    this.props.submitRegister(this.state.username, this.state.password)
    console.log(this.state.username, this.state.password);
    this.toggle();
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary="true"
        onClick={() => this.toggle()}
      />,
      <FlatButton
        label="Submit"
        primary="true"
        onClick={() => this.submit()}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Register" onClick={() => this.toggle()} />
        <Dialog
          title="Register"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.toggle()}
        >
          <TextField
             hintText="Joe Shmoe"
             floatingLabelText="Username"
             onChange={(e) => this.handleUsernameChange(e)}
           /><br />
          <TextField
             hintText="😛"
             floatingLabelText="Password"
             onChange={(e) => this.handlePasswordChange(e)}
             type="password"
           /><br />
          <TextField
             hintText="😜"
             floatingLabelText="Confirm Password"
             onChange={(e) => this.handlePassword2Change(e)}
             type="password"
           /><br />
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    modal: state.modal.register,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => {
      dispatch({type: 'TOGGLE_REGISTER_MODAL'});
    },
    submitRegister: (un, pw) => {
      dispatch({ type: 'SUBMIT_REGISTER', username: un, password: pw});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRegister);
