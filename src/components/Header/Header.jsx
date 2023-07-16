import { msgTitle } from '/src/data/messages.json'
import { NASA_IMAGE_SOURCE } from '/src/data/data.json'
import './Header.css'
const Header = () => {
  return (
    <header>
      <img src={NASA_IMAGE_SOURCE}></img>
      <h1>{msgTitle}</h1>
      <a href='https://api.nasa.gov/' target='_blank' rel='noopener noreferrer'>{`{NASA API}`}</a>
    </header>
  )
}

export default Header