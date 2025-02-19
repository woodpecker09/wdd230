const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.23417828132583&lon=-111.65779407558473&appid=3616593113f2acec6d0128f31264f759&units=imperial';

const weatherInf = document.querySelector('#weatherInf');


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
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
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
 
  const weatherImg = document.createElement('img');
  const currentTemp = document.createElement('p');
  const dataDesc = document.createElement('p');

  weatherImg.setAttribute('src', iconsrc);
  weatherImg.setAttribute('alt', desc);

  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  
  dataDesc.textContent = `${desc}`;

  weatherInf.appendChild(weatherImg);
  weatherInf.appendChild(currentTemp);
  weatherInf.appendChild(dataDesc);

}