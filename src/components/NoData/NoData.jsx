import { msgNoData, msgErrorApi } from '/src/data/messages.json'
import './NoData.css'

const NoData = ({ selectedDate, error }) => {
  return (
    <div className='nodata-container'>

      {error ? (
        <>
          <h2>{msgErrorApi}</h2>
          <p> {error}</p>
        </>
      ) : (
        <h2>{msgNoData} {selectedDate}</h2>
      )}
      <img src="/Black-Hole.png"></img>
    </div>
  )
}

export default NoData