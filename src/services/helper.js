export async function callAPI(lat=0, long=0) {
  const getAPILocation = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4ad98682883ede3d088095d90aaf6a65`);
  const getAPILocationJson = await getAPILocation.json();
  const getAPIName = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&q=${getAPILocationJson.name}&appid=4ad98682883ede3d088095d90aaf6a65`);
  const getAPINameJson = await getAPIName.json();
  let futureData = [];
  for (let i = 1; i < 40; i++) {
    if(i % 8 == 0) {
      
      let iconFuture = getAPINameJson.list[i].weather[0].icon;
      let dt  = getAPINameJson.list[i].dt;
      let temp = Math.round((getAPINameJson.list[i].main.temp) - 273);
      futureData.push({dt: dt, temp: temp, iconFuture: iconFuture});
    }
  }
  const resData = {country: getAPINameJson.city.country, city: getAPINameJson.city.name, date :( getAPINameJson.list[0].dt_txt).split(' ')[0], wind: getAPINameJson.list[0].wind.speed, humidity : getAPINameJson.list[0].main.humidity, tempp: Math.round((getAPINameJson.list[0].main.temp) - 273), icon : getAPINameJson.list[0].weather[0].icon, dt: getAPINameJson.list[0].dt, future: futureData}
  return resData;
}

export function getPosition() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej)
  });
}
