import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        { this.props.username.length !== 0 ?
          <h2>Welcome, {this.props.username}</h2> : <p/> }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
    username: state.user.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
