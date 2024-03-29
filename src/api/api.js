const apiKey = '993d120e59fa88e46784540479fb8427';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then((res) => res.json())
        .then((json) => {
            return json;
        })
}

export default getWeather;