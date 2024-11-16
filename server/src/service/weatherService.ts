import dotenv from 'dotenv';
dotenv.config();

// {"coord":{"lon":-79.4163,"lat":43.7001},
//  "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
//  "base":"stations",
//  "main":{"temp":280.31,"feels_like":277.13,"temp_min":279.44,"temp_max":280.97,"pressure":1017,"humidity":86,"sea_level":1017,"grnd_level":1001},
//  "visibility":10000,
//  "wind":{"speed":5.14,"deg":340},
//  "clouds":{"all":100},
//  "dt":1731720028,
//  "sys":{"type":1,"id":718,"country":"CA","sunrise":1731672757,"sunset":1731707540},
//  "timezone":-18000,"id":6167865,"name":"Toronto","cod":200}

// TODO: Define an interface for the Coordinates object
 interface ApiCoordinates{

  // declare the properties
  coord: {
    lon: Float32Array,
    lat: Float32Array,  
  };

  weather: [{
    id: number,
    main: string,
    description: string,
    icon: string
  }];

  base: string; //stations

  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  };    

  visibility: number;

  wind: {
    speed: number,
    deg: number,
    gust: number
  };

  clouds: {
    all: number
  };

  dt: number;

  sys: {
    "type": number,
    "id": number,
    "country": string,
    "sunrise": number,
    "sunset": number
  }; 

  timezone: number;
  id: number;
  name: string;
  cod: number;

  // declare the methods
  getCoordinates(coord: any): void;
  setCoordinates(coord: any): void;  

}

// TODO: Define a class for the Weather object
class Weather implements ApiCoordinates{

  // declare the properties
  coord: {
    lon: Float32Array,
    lat: Float32Array,  
  };

  weather: [{
    id: number,
    main: string,
    description: string,
    icon: string
  }];

  base: string;

  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  };    

  visibility: number;

  wind: {
    speed: number,
    deg: number,
    gust: number
  };

  clouds: {
    all: number
  };

  dt: number;

  sys: {
    "type": number,
    "id": number,
    "country": string,
    "sunrise": number,
    "sunset": number
  }; 

  timezone: number;
  id: number;
  name: string;
  cod: number
  
// Constructor
constructor(
  // declare the properties
  coord: {
    lon: Float32Array,
    lat: Float32Array,  
  },

  weather: [{
    id: number,
    main: string,
    description: string,
    icon: string
  }],

  base: string,

  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  },   

  visibility: number,

  wind: {
    speed: number,
    deg: number,
    gust: number
  },

  clouds: {
    all: number
  },

  dt: number,

  sys: {
    "type": number,
    "id": number,
    "country": string,
    "sunrise": number,
    "sunset": number
  }, 

  timezone: number,
  id: number,
  name: string,
  cod: number

) {
  // declare the properties
  this.coord = coord,
  this.weather = weather,
  this.base = base,
  this.main = main,
  this.visibility = visibility,
  this.wind = wind,
  this.clouds = clouds,
  this.dt = dt,
  this.sys = sys,
  this.timezone = timezone,
  this.id = id,
  this.name = name,
  this.cod = cod
}

  // Methods
  getCoordinates(coord: any): void {
    return this.coord = coord;
  }

  setCoordinates(coord: any): void {
    this.coord = coord;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  baseURL: string;
  apiKey: string;
  city: string;

  constructor(baseURL: string, apiKey: string, city: string) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
    this.city = city;
  }
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  private async fetchLocationData(): Promise<any> {
    const url = this.baseURL;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }
    return response.json();
  }  

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {
    if (!locationData || locationData.length === 0) {
      throw new Error("No location data found");
    }
    return {
      lat: locationData[0].lat,
      lon: locationData[0].lon,
    };

  }
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    return `${this.baseURL}/geo/1.0/direct?q=${this.city}&appid=${this.apiKey}`;    
  }
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
