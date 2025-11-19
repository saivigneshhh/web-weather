const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key


const data = await response.json();
displayWeather(data);


} catch (error) {
errorMsg.textContent = "Error fetching data";
}
}


function displayWeather(data) {
document.getElementById("weatherCard").classList.remove("hidden");


document.getElementById("cityName").textContent = data.name;
document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;


document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();


document.getElementById("sunrise").textContent = `Sunrise: ${sunrise}`;
document.getElementById("sunset").textContent = `Sunset: ${sunset}`;


const updatedTime = new Date().toLocaleTimeString();
document.getElementById("updated").textContent = `Last Updated: ${updatedTime}`;
}
