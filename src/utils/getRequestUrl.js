import { NASA_URL } from '/src/data/data.json';

const getRequestUrl = (nasaApi, date) => {
  const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
  if (nasaApi === 'mars')
    return `${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_API_KEY}`;
  return `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`;
};

export default getRequestUrl;
