import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const getSensorData = async (values) => {


  
  try {
    let params = {
      mac_Id: values.mac_Id,
      ts: values.ts,
    };

    const sensorData = await axios.get("/api/sensor/getData", { params });

    return sensorData.data;
  } catch (error) {
    return error;
  }
};

export const getWeather = async (values) => {
  try {
    let params = {
      lat: values.lat,
      lon: values.lon,
    };
    const weatherData = await axios.get("/api/weather/getCurrent", { params });

    return weatherData.data[0];
  } catch (error) {
    return error;
  }
};
