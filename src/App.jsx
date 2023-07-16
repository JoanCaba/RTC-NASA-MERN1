import { useEffect, useState } from 'react'
import './App.css'
import ImageCard from './components/ImageCard/ImageCard';

const EXAMPLE_RESPONSE = {
  "copyright": "\nNicholas Roemmelt\n(Venture Photography)\n",
  "date": "2023-07-16",
  "explanation": "Now this was a view with a thrill. From Mount Tschirgant in the Alps, you can see not only nearby towns and distant Tyrolean peaks, but also, weather permitting, stars, nebulas, and the band of the Milky Way Galaxy. What made the arduous climb worthwhile this night, though, was another peak -- the peak of the 2018 Perseids Meteor Shower. As hoped, dispersing clouds allowed a picturesque sky-gazing session that included many faint meteors, all while a carefully positioned camera took a series of exposures. Suddenly, a thrilling meteor -- bright and colorful -- slashed down right next to the nearly vertical band of the Milky Way.  As luck would have it, the camera caught it too.  Therefore, a new image in the series was quickly taken with one of the sky-gazers posing on the nearby peak. Later, all of the images were digitally combined.",
  "hdurl": "https://apod.nasa.gov/apod/image/2307/MeteorMountain_Roemmelt_1371.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Meteor and Milky Way over the Alps",
  "url": "https://apod.nasa.gov/apod/image/2307/MeteorMountain_Roemmelt_960.jpg"
}



const SERVER_URL = 'https://api.nasa.gov/'
const today = new Date(Date.now()).toISOString().slice(0, 10);
function App() {
  const [data, setData] = useState(EXAMPLE_RESPONSE);
  const [selectedDate, setSelectedDate] = useState(today)

  const handleInput = (ev) => {
    setSelectedDate(ev.target.value.toLocaleString());
  };
  const { copyright, explanation, title, hdurl } = data
  /*
    useEffect(() => {
      fetch(SERVER_URL + 'apod?api_key=DEMO_KEY')
        .then((res) => res.json())
        .then((res) => setData(res))
  
  
    }, [])
  
    /*
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

     "msg": "Date must be between Jun 16, 1995 and Jul 16, 2023.",
   
    */
  return (
    <>
      <div>{selectedDate}</div>
      <input type='date' value={selectedDate}
        min="1995-06-16" max={today} onChange={handleInput}></input>
      <ImageCard title={title} description={explanation} imageSrc={hdurl} extraInformation={copyright}></ImageCard>
    </>
  )
}

export default App
