import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Home from './components/Home';
// import TextEditor from './components/TextEditor';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => (
        <Home />
      )} />
      {/*<Route exact path='/wysiwyg' render={() => (
        <TextEditor />
      )} />*/}
    </div>
  );
}

export default withRouter(App);
