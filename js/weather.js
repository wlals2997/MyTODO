const API_KEY = '13e8284d4b4a6c1d01f800811cdd9dc5';

function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log('you live in ', latitude, longitude);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url).then((response) => response.json()).then(data => {
      const weather = document.querySelector('#weather span:first-child');
      const weatherimg = document.querySelector('#weather span:nth-child(even)');
      console.log(weatherimg)
      const  city = document.querySelector('#weather span:last-child');
      weather.innerHTML = `<img class="weathericons" src="http://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png"/>`;
      city.innerText = `${data.name}`;
      weatherimg.innerHTML=`${data.weather[0].main}/${parseInt(data.main.temp)}도`
});
  }
  //실제로 url에 갈 필요없이 자바스크립트가 대신 url을 부른다.
 //위도, 경도,APIKEY값은 꼭 있어야한다.
function GeoError() {
  alert("can't find");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, GeoError); //이걸 부르면 브라우저에서 위치 좌표를 준다.
