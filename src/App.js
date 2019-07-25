import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Home from './components/Home';
import NavigationBar from './components/NavigationBar'
import TextEditor from './components/TextEditor';

class App extends Component {
  constructor() {
    super();

  }

  
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Route exact path='/' render={() => (
          <Home />
        )} />
        <Route exact path='/wysiwyg' render={() => (
          <TextEditor
            editorState={null}
            onEditorStateChange={null}/>
        )} />
      </div>
    );
  }
}

export default withRouter(App);
