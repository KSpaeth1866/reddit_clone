import React from 'react';
import { connect } from 'react-redux';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';

class ModalRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.modal
    });
  }
  toggle() {
    this.props.toggleModal();
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
        onClick={() => this.toggle()}
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
           /><br />
          <TextField
             hintText="😛"
             floatingLabelText="Password"
             type="password"
           /><br />
          <TextField
             hintText="😜"
             floatingLabelText="Confirm Password"
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRegister);
