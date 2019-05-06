import React, { Component } from 'react';
import './App.css';
import { CatLoader } from './CatLoader';
import { Categories } from './Categories';
import { CatList } from './CatList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <h1>Cat-egory</h1> 
          <p>Save and create lists of random cat images you like!</p>
        </div>
        <div className="row">
        <div className="col-md-8">
         <CatLoader />
        <Categories />
        <CatList />
       
        </div>
       </div>
      </div>
    );
  }
}

export default App;
