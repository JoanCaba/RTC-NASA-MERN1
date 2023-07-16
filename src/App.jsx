import { useEffect, useState } from 'react'
import './App.css'
import { msgTitle, msgCorresponds } from './data/messages.json'
import Header from './components/Header/Header';
import Inputs from './components/Inputs/Inputs';
import getRequestUrl from './utils/getRequestUrl';
import transformData from './utils/transformData';
import Apod from '/src/components/Apod/Apod';
import Mars from './components/Mars/Mars';
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

const today = new Date(Date.now()).toISOString().slice(0, 10);
function App() {
  const [data, setData] = useState(EXAMPLE_RESPONSE);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedApi, setSelectedApi] = useState('apod');

  // useEffect(() => {
  //   fetch(getRequestUrl(selectedApi, selectedDate))
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  // }, [selectedDate, selectedApi])

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
      <Header setSelectedApi={setSelectedApi} selectedDate={selectedDate} setSelectedDate={setSelectedDate} today={today}></Header>
      {selectedApi === 'mars' && (
        <Mars data={data}></Mars>)
      }
      {selectedApi === 'apod' && (
        <Apod data={data}></Apod>)
      }

      {/* <Figure title={title} description={explanation} imageSrc={hdurl} extraInformation={`© ${copyright} @ ${date}`}></Figure>
    */}
    </>
  )
}

export default App
