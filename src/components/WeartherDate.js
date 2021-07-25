import React, { Component } from "react";
class WeartherDate extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="text-center">
        <img src={`http://openweathermap.org/img/wn/${this.props.iconFuture}@2x.png`} alt="img weather" />
        <p>{this.props.getdow(this.props.dt)}</p>
        <p>
          <span>{this.props.temp} ºC</span>
        </p>
      </div>
    );
  }
}

export default WeartherDate;
