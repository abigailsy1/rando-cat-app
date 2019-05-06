import React, { Component } from 'react';
import './App.css';
import { CatLoader } from './CatLoader';
import { Categories } from './Categories';
import { CatList } from './CatList';
import { CatInput } from './CatInput';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <h1>Cat-egory</h1> 
          <p>Save and create lists of random cat images you like!</p>
        </div>
        <CatLoader />
        <Categories />
        <CatList />
        <CatInput />
      </div>
    );
  }
}

export default App;
