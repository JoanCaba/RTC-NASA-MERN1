import Mars from '../Mars/Mars'
import Apod from '../Apod/Apod'
import './Main.css'

const Main = ({ data, selectedApi }) => {
  return (
    <main>
      {data.photos && (
        <Mars data={data.photos}></Mars>)
      }
      {selectedApi === 'apod' && (
        <Apod data={data}></Apod>)
      }
    </main>
  )
}

export default Main