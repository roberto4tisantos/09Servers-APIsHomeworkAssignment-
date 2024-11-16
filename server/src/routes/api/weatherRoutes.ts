import { Router } from 'express';
const router = Router();

 import HistoryService from '../../service/historyService.js';
 import WeatherService from '../../service/weatherService.js';
 import weatherService from '../../service/weatherService.js'; 

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req, res) => {
  // TODO: GET weather data from city name
  const { city } = req.body; // Expecting `city` in the POST request body
  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    // Get weather data from city name
    const weatherData = await weatherService.getWeatherByCity(city);

    // Save city to search history
    await HistoryService.saveCitySearch(city);

    return res.status(200).json(weatherData);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// TODO: GET search history
router.get('/history', async (req, res) => {
  try {
    console.log(req);
    const history = await HistoryService.getCities();
    return res.status(200).json(history);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch search history' });
  }  
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'ID is required to delete a history entry' });
  }

  try {
    const deleted = await HistoryService.removeCity(id);

    if (id) {
      return res.status(200).json({ message: 'Entry deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Entry not found' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete history entry' });
  }  
});

export default router;
