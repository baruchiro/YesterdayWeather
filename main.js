window.onload = function() {
    const API_KEY = "YOUR_API_KEY";
    const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/forecast";
    const CITY = "San Francisco";
  
    const url = `${API_ENDPOINT}?q=${CITY}&units=imperial&appid=${API_KEY}`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // process the weather data and display it in the page
      });
  }
  