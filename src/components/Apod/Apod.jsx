import Figure from '/src/components/Figure/Figure'
import './Apod.css'
import { msgCorresponds } from '/src/data/messages.json'

const Apod = ({ data }) => {
  const { copyright, explanation, title, url, hdurl, date } = data;
  return (
    <section className='apod-section'>
      <h2>{`${msgCorresponds} ${date}`}</h2>
      <Figure title={title} description={explanation} imageSrc={url} imageSrcHd={hdurl} extraInformation={<><span>©</span>{copyright} <span>@</span> {date}</>}></Figure>
    </section>
  )
}

export default Apod