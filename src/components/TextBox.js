import React, { Component } from 'react';

class TextBox extends Component {
  // constructor(props) {
  //   super(props);
    
  // }
  render() {
    return (
      <input name={this.props.name} id={this.props.id} type="text" aria-label="First name" className={this.props.className} placeholder={this.props.placeholder} onChange={this.props.onChangeEvent}/>
    );
  }
}

export default TextBox;