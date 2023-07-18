import Mars from '/src/components/Mars/Mars'
import Apod from '/src/components/Apod/Apod'
import './MainSection.css'
import NoData from '../NoData/NoData';

const MainSection = ({ data, selectedApi, selectedDate }) => {
  if (data.error) {
    return <main>
      <NoData selectedDate={selectedDate} error={data.error.message} />
    </main>
  }

  else return (
    <main>
      {!data ? (<NoData selectedDate={selectedDate} />) : (

        <>{data.photos && (
          <Mars data={data.photos} selectedDate={selectedDate}></Mars>)
        }
          {selectedApi === 'apod' && (
            <Apod data={data}></Apod>)}
        </>
      )}
    </main >
  )
};

export default MainSection