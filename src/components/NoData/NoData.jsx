import { msgNoData } from '/src/data/messages.json'
import './NoData.css'

const NoData = ({ selectedDate }) => {
  return (
    <div className='nodata-container'>
      <h2>{msgNoData} {selectedDate}</h2>
      <img src="/Black-Hole.png"></img>
    </div>
  )
}

export default NoData