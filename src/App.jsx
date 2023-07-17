import { useEffect, useState } from 'react'
import './App.css'
//import { msgTitle, msgCorresponds } from './data/messages.json'
import Header from '/src/components/Header/Header';
//import Inputs from './components/Inputs/Inputs';
//import getRequestUrl from './utils/getRequestUrl';
//import transformData from './utils/transformData';
//import Apod from '/src/components/Apod/Apod';
import Main from '/src/components/Main/Main';
import Footer from '/src/components/Footer/Footer';
const EXAMPLE_RESPONSE_APOD = {
  "copyright": "\nNicholas Roemmelt\n(Venture Photography)\n",
  "date": "2023-07-16",
  "explanation": "Now this was a view with a thrill. From Mount Tschirgant in the Alps, you can see not only nearby towns and distant Tyrolean peaks, but also, weather permitting, stars, nebulas, and the band of the Milky Way Galaxy. What made the arduous climb worthwhile this night, though, was another peak -- the peak of the 2018 Perseids Meteor Shower. As hoped, dispersing clouds allowed a picturesque sky-gazing session that included many faint meteors, all while a carefully positioned camera took a series of exposures. Suddenly, a thrilling meteor -- bright and colorful -- slashed down right next to the nearly vertical band of the Milky Way.  As luck would have it, the camera caught it too.  Therefore, a new image in the series was quickly taken with one of the sky-gazers posing on the nearby peak. Later, all of the images were digitally combined.",
  "hdurl": "https://apod.nasa.gov/apod/image/2307/MeteorMountain_Roemmelt_1371.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Meteor and Milky Way over the Alps",
  "url": "https://apod.nasa.gov/apod/image/2307/MeteorMountain_Roemmelt_960.jpg"
}

const EXAMPLE_RESPONSE_MARS = {
  "photos": [
    {
      "id": 1146312,
      "sol": 3852,
      "camera": {
        "id": 22,
        "name": "MAST",
        "rover_id": 5,
        "full_name": "Mast Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03852/mcam/3852ML1041770011601795C00_DXXX.jpg",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1146313,
      "sol": 3852,
      "camera": {
        "id": 22,
        "name": "MAST",
        "rover_id": 5,
        "full_name": "Mast Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03852/mcam/3852MR1041770011900494C00_DXXX.jpg",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1146314,
      "sol": 3852,
      "camera": {
        "id": 22,
        "name": "MAST",
        "rover_id": 5,
        "full_name": "Mast Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03852/mcam/3852MR1041770001900493C00_DXXX.jpg",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1146315,
      "sol": 3852,
      "camera": {
        "id": 22,
        "name": "MAST",
        "rover_id": 5,
        "full_name": "Mast Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03852/mcam/3852ML1041770001601794C00_DXXX.jpg",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1146316,
      "sol": 3852,
      "camera": {
        "id": 22,
        "name": "MAST",
        "rover_id": 5,
        "full_name": "Mast Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03852/mcam/3852ML1041770011601795I01_DXXX.jpg",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1146317,
      "sol": 3852,
      "camera": {
        "id": 22,
        "name": "MAST",
        "rover_id": 5,
        "full_name": "Mast Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03852/mcam/3852MR1041770011900494I01_DXXX.jpg",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1146318,
      "sol": 3852,
      "camera": {
        "id": 22,
        "name": "MAST",
        "rover_id": 5,
        "full_name": "Mast Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03852/mcam/3852MR1041770001900493I01_DXXX.jpg",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1146319,
      "sol": 3852,
      "camera": {
        "id": 22,
        "name": "MAST",
        "rover_id": 5,
        "full_name": "Mast Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03852/mcam/3852ML1041770001601794I01_DXXX.jpg",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145995,
      "sol": 3852,
      "camera": {
        "id": 23,
        "name": "CHEMCAM",
        "rover_id": 5,
        "full_name": "Chemistry and Camera Complex"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ccam/CR0_739454329EDR_F1011402CCAM03851M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145996,
      "sol": 3852,
      "camera": {
        "id": 23,
        "name": "CHEMCAM",
        "rover_id": 5,
        "full_name": "Chemistry and Camera Complex"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ccam/CR0_739453590EDR_F1011402CCAM03851M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145997,
      "sol": 3852,
      "camera": {
        "id": 23,
        "name": "CHEMCAM",
        "rover_id": 5,
        "full_name": "Chemistry and Camera Complex"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/soas/rdr/ccam/CR0_739454329PRC_F1011402CCAM03851L1.PNG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145998,
      "sol": 3852,
      "camera": {
        "id": 23,
        "name": "CHEMCAM",
        "rover_id": 5,
        "full_name": "Chemistry and Camera Complex"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/soas/rdr/ccam/CR0_739453590PRC_F1011402CCAM03851L1.PNG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145985,
      "sol": 3852,
      "camera": {
        "id": 26,
        "name": "NAVCAM",
        "rover_id": 5,
        "full_name": "Navigation Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ncam/NLB_739453411EDR_F1011402CCAM03851M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145986,
      "sol": 3852,
      "camera": {
        "id": 26,
        "name": "NAVCAM",
        "rover_id": 5,
        "full_name": "Navigation Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ncam/NRB_739453411EDR_F1011402CCAM03851M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145987,
      "sol": 3852,
      "camera": {
        "id": 26,
        "name": "NAVCAM",
        "rover_id": 5,
        "full_name": "Navigation Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ncam/NRB_739452884EDR_S1011402NCAM00567M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145988,
      "sol": 3852,
      "camera": {
        "id": 26,
        "name": "NAVCAM",
        "rover_id": 5,
        "full_name": "Navigation Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ncam/NRB_739452846EDR_S1011402NCAM00567M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145989,
      "sol": 3852,
      "camera": {
        "id": 26,
        "name": "NAVCAM",
        "rover_id": 5,
        "full_name": "Navigation Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ncam/NRB_739452808EDR_S1011402NCAM00567M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145990,
      "sol": 3852,
      "camera": {
        "id": 26,
        "name": "NAVCAM",
        "rover_id": 5,
        "full_name": "Navigation Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ncam/NRB_739452770EDR_S1011402NCAM00567M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145991,
      "sol": 3852,
      "camera": {
        "id": 26,
        "name": "NAVCAM",
        "rover_id": 5,
        "full_name": "Navigation Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ncam/NRB_739452732EDR_S1011402NCAM00567M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145992,
      "sol": 3852,
      "camera": {
        "id": 26,
        "name": "NAVCAM",
        "rover_id": 5,
        "full_name": "Navigation Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ncam/NRB_739452694EDR_S1011402NCAM00567M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145993,
      "sol": 3852,
      "camera": {
        "id": 26,
        "name": "NAVCAM",
        "rover_id": 5,
        "full_name": "Navigation Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ncam/NRB_739452656EDR_S1011402NCAM00567M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    },
    {
      "id": 1145994,
      "sol": 3852,
      "camera": {
        "id": 26,
        "name": "NAVCAM",
        "rover_id": 5,
        "full_name": "Navigation Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03852/opgs/edr/ncam/NRB_739452618EDR_S1011402NCAM00567M_.JPG",
      "earth_date": "2023-06-07",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3887,
        "max_date": "2023-07-13",
        "total_photos": 664073,
        "cameras": [
          {
            "name": "FHAZ",
            "full_name": "Front Hazard Avoidance Camera"
          },
          {
            "name": "NAVCAM",
            "full_name": "Navigation Camera"
          },
          {
            "name": "MAST",
            "full_name": "Mast Camera"
          },
          {
            "name": "CHEMCAM",
            "full_name": "Chemistry and Camera Complex"
          },
          {
            "name": "MAHLI",
            "full_name": "Mars Hand Lens Imager"
          },
          {
            "name": "MARDI",
            "full_name": "Mars Descent Imager"
          },
          {
            "name": "RHAZ",
            "full_name": "Rear Hazard Avoidance Camera"
          }
        ]
      }
    }
  ]

}

const today = new Date(Date.now()).toISOString().slice(0, 10);
function App() {
  const [data, setData] = useState(EXAMPLE_RESPONSE_MARS);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedApi, setSelectedApi] = useState('apod');

  useEffect(() => {
    if (selectedApi === 'mars') { setData(EXAMPLE_RESPONSE_MARS) }
    else { setData(EXAMPLE_RESPONSE_APOD) }
  }, [selectedDate, selectedApi])



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
      <Header setSelectedApi={setSelectedApi} selectedApi={selectedApi} selectedDate={selectedDate} setSelectedDate={setSelectedDate} today={today}></Header>
      <Main data={data} selectedApi={selectedApi} />
      <Footer></Footer>
      {/* <Figure title={title} description={explanation} imageSrc={hdurl} extraInformation={`© ${copyright} @ ${date}`}></Figure>
    */}
    </>
  )
}

export default App
