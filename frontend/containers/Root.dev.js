import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';

import AppContainer from './AppContainer.js';

import DevTools from './DevTools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  HashRouter
} from 'react-router-dom';
export default function Root({ store, history }) {
  return (
  <MuiThemeProvider>
    <Provider store={store}>
      <div>
        <HashRouter >
          <AppContainer />
        </HashRouter>
        <DevTools />
      </div>
    </Provider>
  </MuiThemeProvider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
