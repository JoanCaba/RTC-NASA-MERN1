import Mars from '/src/components/Mars/Mars'
import Apod from '/src/components/Apod/Apod'
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