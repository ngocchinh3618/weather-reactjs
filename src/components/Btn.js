import React, { Component } from 'react';

class Btn extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <button className={this.props.clsName} type="button" onClick={this.props.name == "btnCurrent" ? this.props.onGetLocaltion : this.props.onClickLocation}><i className="bi bi-geo-alt-fill" /> {this.props.txt}</button>

    );
  }
}

export default Btn;

