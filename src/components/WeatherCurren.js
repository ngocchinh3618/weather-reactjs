import React, { Component } from "react";
import moment from "moment-timezone";

class WeatherCurren extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <div className="current-location__detail">
        <div className="current-location__detail__box p-4">
          <div>
            <h3>{this.props.getDay(this.props.data.dt)}</h3>
          </div>
          <div>
            <p>{this.props.data.date}</p>
          </div>
          <div>
            <p> {this.props.data.city} </p>  
          </div>
          <div>
            <p id="time-zone"> {
              this.props.data.country ? moment.tz.zonesForCountry(this.props.data.country, true)[0].name : ""
            } </p>
          </div>
        </div>
        <div className="mt-4 ms-4">
        <img src={`http://openweathermap.org/img/wn/${this.props.data.icon}@2x.png`} alt="img weather" />
          <h1>
            <span > {this.props.data.tempp}
            ºC </span>
          </h1>
          <p> State </p>
        </div>
      </div>
    );
  }
}

export default WeatherCurren;
