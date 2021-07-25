import React, { Component } from "react";
import WeartherDate from "./WeartherDate";

class WeatherFuture extends Component {
  // constructor(props) {
  //   super(props);
  // } 

  render() {
    return (
      <div className="current-location">
        <div className="specification p-4">

          <div className="d-flex justify-content-between text-uppercase">
            <p>humidity</p>
            <p>
              <span id="humidity" />{this.props.data.humidity} %
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-uppercase">wind</p>
            <p>
              <span id="wind" />{this.props.data.wind} km/h
            </p>
          </div>
        </div>
        <div className="d-flex mt-1 justify-content-evenly pt-5">
          { this.props.data.future ? this.props.data.future.map((item, index) => <WeartherDate getdow={this.props.getDay} iconFuture = {item.iconFuture} key={index} dt={item.dt} temp={item.temp}/>) : ""}
        </div>
      </div>
    );
  }
}

export default WeatherFuture;
