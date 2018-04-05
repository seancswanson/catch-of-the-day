import React, { Component, Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  constructor(props) {
    super(props);
  }
  myInput = React.createRef();

  goToStore = (e) => {
    //1. Stop form from submitting
    e.preventDefault();
    //2. Get text from input
    const storeName = this.myInput.value.value;
    //3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`)
  }


  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore} >
          <h2>Please Enter A Store</h2>
          <input ref={this.myInput} type="text" required placeholder="Store name" defaultValue={getFunName()} />
          <button type="submit" >Visit Store →</button>
        </form>
      </Fragment>
    )
  }
}


export default StorePicker;