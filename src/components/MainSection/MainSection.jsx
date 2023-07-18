import Mars from '/src/components/Mars/Mars'
import Apod from '/src/components/Apod/Apod'
import './MainSection.css'
import Loading from '../Loading/Loading';
import NoData from '../NoData/NoData';

const MainSection = ({ isLoading, data, selectedApi, selectedDate }) => {
  if (!data) {
    <main>
      <NoData selectedDate={selectedDate} />
    </main>
  }

  else return (
    <main>
      {isLoading ? (<Loading></Loading>) : (

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