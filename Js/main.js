let btn = document.getElementById('btnSearch');
let search = document.getElementById('search')
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date();
let day = weekday[d.getDay()];
let index = weekday.indexOf(day);
if(index==6){
  index=0;
}
document.getElementById("demo").innerHTML = day;

let weatherList;

btn.addEventListener('click',function(){
  btn.disabled=true;
  let http = new XMLHttpRequest();
  http.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=d8b47d7460024cf49ef200713230408&q=${search.value}&days=3`);
  http.send();
  http.addEventListener('readystatechange',function(){
    if(http.readyState===4) {
        btn.disabled=false;
        if(http.status === 200) {
          weatherList = JSON.parse(http.response);
          console.log(weatherList)
          update();
        }
        else {
          alert("there is error in fetching data")
        }
      }
  })
})


function update(){
  let cols = ``;
    cols=`<div id="parent">
    <div class="row bg-light shadow rounded-3 bg-opacity-25 bg-black text-light border">
      <div class="icon col-2 d-flex justify-content-center align-items-center">
        <img src="https:${weatherList.current.condition.icon}" alt="img" width="100" height="100">
      </div>
      <div class="exprssion col-4 d-flex flex-column justify-content-center align-items-center shadow"  id="expression">
        <p id="demo">${day}</p>
        <p>${weatherList.location.localtime}</p>
        <h1>${weatherList.location.name}</h1>
        <p>Temperature : ${weatherList.current.temp_c} &deg;C</p>
        <p>${weatherList.current.condition.text}</p>
        <p>Humidity : ${weatherList.current.humidity}%</p>
        <p>Wind Speed : ${weatherList.current.wind_kph} km/h</p>
        <p>Wind dir : ${weatherList.current.wind_dir}</p>
      </div>
      <div class="nextDay col-3 d-flex flex-column justify-content-center align-items-center"  id="expression">
        <div class="nextDay-body ">
          <p>${weekday[index]}</p>
          <h5>${weatherList.location.name}</h5>
          <h3>Max : ${weatherList.forecast.forecastday[1].day.maxtemp_c}&deg;C</h3>
          <h3>Min : ${weatherList.forecast.forecastday[1].day.mintemp_c}&deg;C</h3>
          <p>${weatherList.forecast.forecastday[1].day.condition.text}</p>
        </div>
      </div>
      <div class="nextDay col-3 d-flex flex-column justify-content-center align-items-center"  id="expression">
        <div class="nextDay-body">
          <p>${weekday[index+1]}</p>
          <h5>${weatherList.location.name}</h5>
          <h3>Max : ${weatherList.forecast.forecastday[2].day.maxtemp_c}&deg;C</h3>
          <h3>Min : ${weatherList.forecast.forecastday[2].day.mintemp_c}&deg;C</h3>
          <p>${weatherList.forecast.forecastday[2].day.condition.text}</p>
        </div>
      </div>
    </div>
  </div>`
    document.getElementById('parent').innerHTML=cols;
}




// btn.addEventListener('click',async function(){
//   btn.disabled=true;
//   let request = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d8b47d7460024cf49ef200713230408&q=${search.value}&days=3`);
//   let weatherList = await request.json();
//   update();
//   btn.disabled=false;
// })

