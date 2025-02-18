const weatherIcon = document.querySelector('#weather-icon');
const weatherData = document.querySelector('#weather-data');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.23349705722505&lon=-111.65880443639847&appid=3616593113f2acec6d0128f31264f759&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

apiFetch();

function displayResults(data) {
    let desc = data.weather[0].description;
    weatherData.innerHTML = `${data.main.temp}&deg;F - ${desc}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
  }