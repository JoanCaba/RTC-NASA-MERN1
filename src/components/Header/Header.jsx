import { msgTitle } from '/src/data/messages.json'
// import { NASA_IMAGE_SOURCE } from '/src/data/data.json'
import './Header.css'
import Inputs from '../Inputs/Inputs'
const Header = ({ setSelectedApi, setSelectedDate, selectedDate, selectedApi, today }) => {
  return (
    <header>
      <div className='header-title'>
        <img src='/src/assets/Nasa-192.png'></img>
        <h1>{msgTitle}</h1>
        <a href='https://api.nasa.gov/' target='_blank' rel='noopener noreferrer'>{`{NASA API}`}</a>
      </div>
      <Inputs setSelectedApi={setSelectedApi} selectedApi={selectedApi} selectedDate={selectedDate} setSelectedDate={setSelectedDate} today={today}></Inputs>
    </header>
  )
}

export default Header