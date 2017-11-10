import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <MuiThemeProvider>
        <div>
          {/* <Title name={this.props.name} /> */}
          <Header />
          <Feed />
          <Sidebar />
        </div>
      </MuiThemeProvider>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
