// script.js
const apiKey = "0cddfd47649d15c0808350667e99c538"; // Replace with your API key
const weatherForm = document.getElementById("weatherForm");
const weatherDiv = document.getElementById("weather");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const weatherIcon = data.weather[0].icon; // Get weather icon code
        const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`; // Icon URL

        weatherDiv.innerHTML = `          
 <div class="card-body">            
 <h3>${data.name}, ${data.sys.country}</h3>            
 <img src="${iconUrl}" alt="${data.weather[0].description}">      
 <p>${data.weather[0].description}</p> 
 <p class="fs-4">${data.main.temp}°C</p>
 <p>Feels Like: ${data.main.feels_like}°C</p> 
 <p>Pressure: ${data.main.pressure}mb</p> 
 <p>Humidity: ${data.main.humidity}%</p>            
 <p>Wind: ${data.wind.speed * (2.238).toFixed(0)} mph</p>          
 </div>        
 `;
      } else {
        weatherDiv.innerHTML = `<p class="text-danger">${data.message}</p>
        `;
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      weatherDiv.innerHTML = `<p class="text-danger">Failed to load weather data.</p>`;
    });
});
