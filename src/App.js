import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Home from './components/Home';
import NavigationBar from './components/NavigationBar'
import TextEditor from './components/TextEditor';
import { EditorState } from 'draft-js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      editorState: EditorState.createEmpty(),
    }

    this.onEditorStateChange = this.onEditorStateChange.bind(this)
    
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Route exact path='/' render={() => (
          <Home />
        )} />
        <Route exact path='/wysiwyg' render={() => (
          <TextEditor
            editorState={this.state.editorState}
            onEditorStateChange={this.onEditorStateChange}
            />
        )} />
      </div>
    );
  }
}

export default withRouter(App);
