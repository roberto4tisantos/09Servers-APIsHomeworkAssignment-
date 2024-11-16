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
  getCoordinates(coord: {}): void;
  setCoordinates(coord: {}): void;  

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
    return this.coord.lat = coord.lat,
           this.coord.lon = coord.lon 
  };

  setCoordinates(coord: any): void {
    this.coord = coord;
  };
}

// TODO: Complete the WeatherService class
class WeatherService {
  [x: string]: any;
  // TODO: Define the baseURL, API key, and city name properties
  baseURL: string;
  apiKey: string;
  city: string;
  coord!: {
    lon: Float32Array;
    lat: Float32Array;
  };

  constructor(baseURL: string, apiKey: string, city: string) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
    this.city = city;
  }
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  private async fetchLocationData(_city?: string): Promise<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${_city},uk&APPID=f50fdeda34c6840610aff5979774945f`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }
    return response.json();
  }  

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: any): ApiCoordinates {
    if (!locationData || locationData.length === 0) {
      throw new Error("No location data found");
    }
    return this.coord = locationData;
  }
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    return `${this.baseURL}/geo/1.0/direct?q=${this.city}&appid=${this.apiKey}`;    
  }
  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coord: any): string {
    return `${this.baseURL}/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${this.apiKey}&units=metric`;
  }
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {
    const locationData = await this.fetchLocationData(this.city);
    return this.destructureLocationData(locationData);
  }
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coord: any) {
    const url = this.buildWeatherQuery(coord);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    return response.json();
  }
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {
    return {
      description: response.weather[0].description,
      temperature: response.main.temp,
      humidity: response.main.humidity,
    };
  }
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {
    return [
      {
        //...
      },
    ];
  }
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    this.city = city;
    const coordinates = await this.fetchAndDestructureLocationData();
    const weatherData = await this.fetchWeatherData(coordinates);
    const currentWeather = this.parseCurrentWeather(weatherData);
    return {
      city,
      forecast: this.buildForecastArray(currentWeather, []),
    };
  }
  
}

export default new WeatherService();
