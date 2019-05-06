import React from 'react';
import {fetchRandomCat} from './catApi';
import { CatInput } from './CatInput';

export class CatLoader extends React.Component {
  constructor(props){
    super(props);
      this.state = {
    catImage: "",
    categories: []
  };
  }
//async might not work on browser, check babel preset env/plugin (install if necessary)
//async: always returns a promise
async componentDidMount() {
  //await = Waits until promise gives a result
  const data = await fetchRandomCat();
  this.setState ({ catImage: data.file });
}
//fetches new image when clicked in render onclick
handleNextImage = async () => {
  const data = await fetchRandomCat();
  this.setState ({ catImage: data.file });
}
//creating lists
newCategory = categoryInput => {
  this.setState ({
    categories: [categoryInput, ...this.state.categories]
  });
}
  render() {
    return (
       <div className="container">
         <div className="row">
         <div className="col">
          <img src={this.state.catImage} alt="random-cat" style={{ maxWidth: "500px", maxHeight: "500px" }} />
            <div className="col-md-3 offset-md-3">
              <button className="btn btn-light" onClick={this.handleNextImage}>NEXT</button>
         </div>
           
            </div>

         </div>
         <CatInput onSubmit={this.newCategory}/>
       </div>
    )}
}