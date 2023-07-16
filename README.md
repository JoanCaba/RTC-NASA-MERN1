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

- Example query:
  ```
  {
  "copyright": "\nNicholas Roemmelt\n(Venture Photography)\n",
  "date": "2023-07-16",
  "explanation": "Now this was a view with a thrill. From Mount Tschirgant in the Alps, you can see not only nearby towns and distant Tyrolean peaks, but also, weather permitting, stars, nebulas, and the band of the Milky Way Galaxy. What made the arduous climb worthwhile this night, though, was another peak -- the peak of the 2018 Perseids Meteor Shower. As hoped, dispersing clouds allowed a picturesque sky-gazing session that included many faint meteors, all while a carefully positioned camera took a series of exposures. Suddenly, a thrilling meteor -- bright and colorful -- slashed down right next to the nearly vertical band of the Milky Way.  As luck would have it, the camera caught it too.  Therefore, a new image in the series was quickly taken with one of the sky-gazers posing on the nearby peak. Later, all of the images were digitally combined.",
  "hdurl": "https://apod.nasa.gov/apod/image/2307/MeteorMountain_Roemmelt_1371.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Meteor and Milky Way over the Alps",
  "url": "https://apod.nasa.gov/apod/image/2307/MeteorMountain_Roemmelt_960.jpg"
  }
  ```
