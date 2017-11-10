import React from 'react';
import { connect } from 'react-redux';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';
import axios from 'axios';

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
  async submit() {
    try {
      const result = await axios.post('http://localhost:3000/api/user/register', {
        username: this.state.username,
        password: this.state.password,
        password2: this.state.password2,
      });
      console.log(result);
      this.props.submitRegister(result.data.user.username, result.data.user.id);
      this.toggle();
    } catch (e) {
      console.log("YO FUCKED UP",e);
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
    submitRegister: (un, id) => {
      dispatch({ type: 'SUBMIT_REGISTER', username: un, id: id});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRegister);
