import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';
import axios from 'axios';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      title: '',
      content: ''
    });
  }
  handleTitleChange(e) {
    const un = e.target.value;
    this.setState({
      username: un
    });
  }
  handleContentChange(e) {
    const pw = e.target.value;
    this.setState({
      password: pw
    });
  }
  async submit() {
    try {
      const result = await axios.post('http://localhost:3000/api/post/new', {
        title: this.state.title,
        content: this.state.content,
      });
      this.props.addPost()// TODO: INFO ON POST GOES HERE);
    } catch (e) {
      console.log("YO FUCKED UP", e);
    }
  }
  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Post Title"
          onChange={(e) => this.handleTitleChange(e)}
          value={this.state.username}
        /><br />
        <TextField
           hintText="Message Field"
           onChange={(e) => this.handleContentChange(e)}
           multiLine={true}
         /><br />
        <FlatButton
          label="Submit"
          onClick={() => this.submit()}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (title, content) => {
      dispatch({type: "NEW_POST", title, content});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
// export default NewPost;
