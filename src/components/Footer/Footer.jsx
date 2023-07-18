import { msgFooter, msgCheckCode } from '/src/data/messages.json'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='body-footer'>
      <p>{msgFooter}</p>
      <a href='https://api.nasa.gov/' target='_blank' rel='noopener noreferrer'>{`{NASA API}`}</a>
      <div className='check-code'>
        <p>{msgCheckCode}</p>
        <a href='https://github.com/JoanCaba/RTC-NASA-MERN1' rel='noreferrer noopener' target='_blank'>
          <img src='github-mark.svg' alt='GitHub Icon'></img>
        </a>
      </div>
    </footer>
  )
};

export default Footer