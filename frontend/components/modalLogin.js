import React from 'react';
import { connect } from 'react-redux';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';

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
      open: nextProps.modal
    });
  }
  toggle() {
    this.props.toggleModal()
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
           /><br />
          <TextField
             floatingLabelText="Password"
             type="password"
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
      console.log("LOGIN ACTION MADE");
      dispatch({type: 'TOGGLE_LOGIN_MODAL'});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
