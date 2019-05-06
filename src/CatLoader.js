import React from 'react'
import {fetchRandomCat} from './catApi'

export class CatLoader extends React.Component {
  state = {
    catImage: ""
  };

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

  render() {
    return (
       <div>
        <img src={this.state.catImage} alt="random-cat"/>
        <button onClick={this.handleNextImage}>NEXT</button>
      </div>
    )}
}