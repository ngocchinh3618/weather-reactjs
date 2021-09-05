import "./App.css";
import Btn from "./components/Btn";
import TextBox from "./components/TextBox";

import React, { Component } from "react";
import WeatherCurren from "./components/WeatherCurren";
import WeatherFuture from "./components/WeatherFuture";
import {callAPI, getPosition} from "./services/helper";




class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
    this.btnCurrent = this.btnCurrent.bind(this);
    this.btnChange = this.btnChange.bind(this);
    this.btnClickLocation = this.btnClickLocation.bind(this)
  }

  async componentDidMount() {
    const latitude =  localStorage.getItem('latitude') ;
    const longtiude = localStorage.getItem('longtiude') ;
    if (latitude && longtiude)
      this.setState({data: await callAPI(latitude, longtiude)});
    else 
      this.setState({data: await callAPI()});


      
    setInterval(this.btnCurrent, 1800000);
    
  }



  async btnCurrent() {
    let pos = await getPosition();
    console.log(pos);
    localStorage.setItem('latitude', pos.coords.latitude ? pos.coords.latitude : pos.coords.latitude);
    localStorage.setItem('longtiude', pos.coords.longitude ? pos.coords.longitude : pos.coords.longitude);
    this.setState({data: await callAPI(pos.coords.latitude, pos.coords.longitude)});
  }

   btnChange(e){
    // console.log(e.target);
    if(e.target.name == "lat"){
      if(e.target.value >= -90 & e.target.value <= 90){
        this.setState({[e.target.name]: e.target.value});
      }
      else{
        alert("Range from -90 to 90 for latitude.")
      }
    }
    else if(e.target.name == "long"){
      if(e.target.value >= -180 & e.target.value <= 180){
        this.setState({[e.target.name]: e.target.value});
      }
      else{
        alert("Range from -180 to 180 for longitude.")
      }
    }
    
    
    // this.setState({data:callAPI(state.lat, state.long)});
  }

  async btnClickLocation(){
    // console.log(this.state.lat,this.state.long, "object")
    if(this.state.lat && this.state.long){
      localStorage.setItem('latitude', this.state.lat  ? this.state.lat : '');
      localStorage.setItem('longtiude', this.state.long ? this.state.long : '');
      this.setState({data: await callAPI(this.state.lat, this.state.long)})
    }
    else{
      alert("Please enter your Latitude and Longtiude ")
    }
    
  }

  getDow(dt) {
    var d = new Date(dt * 1000);
    var n = d.getDay()
    switch (n) {
      case 0:
        n = "Sunday";
        break;
      case 1:
        n = "Monday";
        break;
      case 2:
        n = "Tuesday";
        break;
      case 3:
        n = "Wednesday";
        break;
      case 4:
        n = "Thursday";
        break;
      case 5:
        n = "Friday";
        break;
      case  6:
        n = "Saturday";
        break;
        default:
    console.log(`Sorry, we are out of`);
    }
    return n;
  }

  render() {
    return (
      <div className="App">
        <article className="container">
          <div className="input-group p-5">
            <TextBox
            name = "lat"
              className="input-lat form-control"
              placeholder="Latitude"
              onChangeEvent={this.btnChange}
             
             />
            <TextBox
              name="long"
              className="input-lon form-control"
              placeholder="Longitude"
              onChangeEvent={this.btnChange}
              
            />
            <Btn
              name="btnCurrent"
              clsName="btn btn-change"
              txt="Current Location"
              onGetLocaltion={this.btnCurrent}
            />
            <Btn
              name="btnChange"
              clsName="btn btn-change"
              // onChangeLocation={this.btnChange}
              onClickLocation={this.btnClickLocation}
              txt="Change Location"
            />
          </div>
          <div className="contain d-flex">
            <WeatherCurren getDay={this.getDow} data={this.state.data}/>
            <WeatherFuture getDay={this.getDow} data={this.state.data} />
          </div>
        </article>
      </div>
    );
  }
}

export default App;

