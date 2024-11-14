import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface ApiCoordinates{

  // declare the properties
  lat: Float32Array;
  lon: Float32Array;

  dt: string; // Timestamp of the weather report

  main: {
    temp: number; // Current temperature
    feels_like: number; // Feels like temperature
    temp_min: number; // Minimum temperature
    temp_max: number; // Maximum temperature
    pressure: number; // Atmospheric pressure
    sea_level: number; // Pressure at sea level
    grnd_level: number; // Pressure at ground level
    humidity: number; // Humidity percentage
    temp_kf: number; // Temperature difference for calculation
  };
  weather: {
    id: number; // Weather condition ID
    main: string; // Main weather condition
    description: string; // Detailed weather description
    icon: string; // Icon code for weather condition
  }[];
  clouds: {
    all: number; // Cloud coverage percentage
  };
  wind: {
    speed: number; // Wind speed in m/s
    deg: number; // Wind direction in degrees
    gust: number; // Wind gust in m/s
  };
  visibility: number; // Visibility in meters
  pop: number; // Probability of precipitation
  rain: {
    '3h': number; // Rain volume for the past
  };
  sys: {
    pod: string; // Part of the day
  };
  dt_txt: string; // Formatted datetime of the forecast  

  // declare the methods
  getCoordinates(lat: Float32Array, lon: Float32Array): void;
  setCoordinates(lat: Float32Array, lon: Float32Array): void;  

}

// TODO: Define a class for the Weather object
class Weather implements ApiCoordinates{

  // Properties
  lat: Float32Array;
  lon: Float32Array;
  dt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain: {
    '3h': number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
  
// Constructor
constructor(
  lat: Float32Array,
  lon: Float32Array,
  dt: string,
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  },
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[],
  clouds: {
    all: number;
  },
  wind: {
    speed: number;
    deg: number;
    gust: number;
  },
  visibility: number,
  pop: number,
  rain: {
    '3h': number;
  },
  sys: {
    pod: string;
  },
  dt_txt: string
) {
  this.lat = lat;
  this.lon = lon;
  this.dt = dt;
  this.main = main;
  this.weather = weather;
  this.clouds = clouds;
  this.wind = wind;
  this.visibility = visibility;
  this.pop = pop;
  this.rain = rain;
  this.sys = sys;
  this.dt_txt = dt_txt;
}

// Methods
getCoordinates(lat: Float32Array, lon: Float32Array): void {
  this.lat = lat;
  this.lon = lon;
}

setCoordinates(lat: Float32Array, lon: Float32Array): void {
  this.lat = lat;
  this.lon = lon;
}
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
