const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')


changeLocation.city.focus()



// loading
    function loading(state){
        if(state){
            overlay.classList.remove('d-none')
        }else{
            overlay.classList.add('d-none')
        }
    }



// Update UI
const updateUi = (weather) => {
    details.innerHTML = `
    <h5 class="mb-3">${weather.name},${weather.sys.country}</h5>
          <p class="mb-3">${weather.weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(weather.main.temp)}</span>
            <span>&deg;C</span>
          </div>
    `;

    weatherIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
}




//get weather

const getWeather = async (city) => {
    const data = await getDate(city)
    return data
}


// get location 

changeLocation.addEventListener('submit', (e) => {
    e.preventDefault()

    card.classList.remove('d-none')
    const cityName = changeLocation.city.value.trim()
    changeLocation.reset()
    getWeather(cityName).then( data => updateUi(data))
})
