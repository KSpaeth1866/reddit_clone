import React from 'react';
import { connect } from 'react-redux';
import  {Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import NewPost from '../components/NewPost';


class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('RENDER');
    return (
        <div>
          <Header />
          <Switch >
            <Route exact path="/" component={Feed}/>
            <Route exact path="/post/new" component={NewPost}/>
          </Switch>
          <Sidebar />
        </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    name: state.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
export default AppContainer;
