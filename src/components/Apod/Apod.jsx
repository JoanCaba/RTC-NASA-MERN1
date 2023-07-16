import Figure from '/src/components/Figure/Figure'

import { msgCorresponds } from '/src/data/messages.json'
const Apod = ({ data }) => {
  const { copyright, explanation, title, hdurl, date } = data;
  return (
    <>
      <h2>{`${msgCorresponds} ${date}`}</h2>
      <Figure title={title} description={explanation} imageSrc={hdurl} extraInformation={`© ${copyright} @ ${date}`}></Figure>
    </>
  )
}

export default Apod