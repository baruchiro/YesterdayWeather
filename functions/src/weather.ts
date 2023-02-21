import axios from "axios";

export async function getYesterdayWeather(latitude: number, longitude: number) {
    const apiKey = '<your-openweathermap-api-key>';
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily&appid=${apiKey}`;
    const response = await axios.get(apiUrl);
    const yesterdayIndex = response.data.hourly.length - 25; // 25 hours ago
    const yesterdayWeather = response.data.hourly[yesterdayIndex];
    return yesterdayWeather;
  }
  