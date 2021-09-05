const submitbtn = document.getElementById("submitbtn");
const inpbox = document.getElementById("inpbox");
let day = document.getElementById("day");
let date = document.getElementById("date");
let cityname = document.getElementById('cityname');
let city;
let tempout = document.getElementById('tempout');
let mood;
function weathercon(arrData){
    console.log('weathercon');
    let a =arrData[0].weather[0].main;
    console.log(a);
    if(a == 'Clear') {
        mood = 'sun';
    }
    else if(a == 'Clouds'){
        mood = 'cloud';
    }
    else if (a == 'Rain'){
        mood = 'cloud-rain';
        console.log('rainrr');
    }
    else {
        mood = 'sun';
        console.log('else');
    }
    console.log(mood);
}

function display(city,arrData) {
  let d = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let bar = days[d.getDay()];
  day.innerHTML =bar;
  let months = ["Jan","Feb","Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov", "Dec",];
    let month = months[d.getMonth()];
    let tarikh = d.getDate();
    date.innerHTML = `${tarikh}th ${month}`

    if(city == '' || city == undefined){
        cityname.innerHTML=`<p style ='font-size: 1rem'>please enter your city name</p>`; 
    }
    else {
    if(arrData[0].cod == 200) {
        console.log('200');
        weathercon(arrData);
        tempout.innerHTML=`<p id="degree">${(arrData[0].main.temp - 273.15).toFixed(2)}&deg;C</p>
        <div id="img"><i class="fas fa-${mood}"></i></div>`;
        cityname.innerHTML = city.toUpperCase();
    }
    else{
        tempout.innerHTML='';
        cityname.innerHTML= `<p style ='font-size: 1rem'>please enter a valid city name<p>`;
    }
}
}



submitbtn.addEventListener("click", () => {
   city = inpbox.value;
  console.log(city);
  if (city == "") {
    console.log("please enter city name");
  } else {
    async function fetchdata() {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67424832c3394f2fd2557b74bb506925`;
        let response = await fetch(url);
        let data = await response.json();
        let arrData = [data];
        console.log(arrData);
        display(city,arrData);
      } catch {
        console.log("data not valid");
      }
    }
    fetchdata();
  }
});
display();
