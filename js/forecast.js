const KEY = '96b947a45d33d7dc1c49af3203966408'


// request get date

const getDate = async(city) => {
    const base = "https://api.openweathermap.org/data/2.5/weather";
    const query = `?q=${city}&units=metric&appid=${KEY}`;
    loading(true)
    const req = await fetch(base + query)
    const date = await req.json()
    loading(false)

    return date
}
