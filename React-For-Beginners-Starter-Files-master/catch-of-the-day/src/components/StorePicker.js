import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
  myInput = React.createRef();
  goToStore = event => {
    // stop the form from submitting.
    event.preventDefault();
    // Get the text from that input
    const storeName = this.myInput.current.value;
    // Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`)
  };
  render(){
    return (
      <React.Fragment>
        <form onSubmit={this.goToStore} className="store-selector">
          <h2>Please Enter A Store</h2>
          <input 
            ref={this.myInput} 
            type="text" 
            required 
            placeholder="Store Name" 
            defaultValue={getFunName()}></input>
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker;