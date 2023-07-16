# 

## TODO:
- img element with NASA today image.
  - title, description and general info of the image
- input element to select date.
  - can´t select > today
  - or, can select but must display a toast and not do the call to the api.
- input to switch from APOD/MARS rover Photos

## Description
- APOD as default API.
- Reuse components for MARS ROVER photos.
- API -> https://api.nasa.gov/
- today  
  ```
const today = new Date(Date.now()).toISOString().slice(0, 10);
  ```
- fetch:
  ```
${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
  ```
- handleInput:
  ```
const handleInput = (ev) => {
setDate(ev.target.value.toLocaleString());
};
  ```
- useEffect to get data from APOD API
- Title: Astro..image...etc
- mesaje: this image corresponds to date...etc
- Figure component:
  - receives props from API:
    - image, title, date, copyright, description.