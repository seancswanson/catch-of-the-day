import React, { Component, Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  goToStore = (e) => {
    e.preventDefault();
    //1. Stop form from submitting
    console.log("Going to store");
    //2. Get text from input
    //3. Change the page to /store/whatever-they-entered
  }

  render(){
    return (
      <Fragment>
      <form className="store-selector" onSubmit={this.goToStore} >
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store name" defaultValue={getFunName()}/>
        <button type="submit" >Visit Store →</button>
      </form>
      </Fragment>
      )
  }
}


export default StorePicker;