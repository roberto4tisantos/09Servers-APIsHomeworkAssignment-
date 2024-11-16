import { promises as fs, PathLike } from 'fs';
import { FileHandle } from 'fs/promises';

// TODO: Define a City class with name and id properties
class City {
  
  name: string;
  id: number;  
  static id: string;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// TODO: Complete the HistoryService class
class HistoryService extends City{

  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
      const data = await fs.readFile('searchHistory.json', 'utf-8');
      return JSON.parse(data) as City[];
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    const data = JSON.stringify(cities, null, 2);
    await fs.writeFile('searchHistory.json', data, 'utf-8');
  }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    return await this.read();
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    const cities = await this.read();
    cities.push({ 
      name: city,
      id: 0
    });
    await this.write(cities);
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {
    const cities = await this.read();
    const updatedCities = cities.filter(_city => City.id !== id);
    await this.write(updatedCities);
  }
}

export default new HistoryService();
