import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class StorePicker extends Component {
  render(){
    return (
      <Fragment>
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store name" />
        <button type="submit">Visit Store →</button>
      </form>
      </Fragment>
      )
  }
}


export default StorePicker;