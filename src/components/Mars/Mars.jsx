import cameraFullname from '../../utils/cameraFullname';
import Figure from '/src/components/Figure/Figure'
import './Mars.css'
import { msgCorrespondsMars } from '/src/data/messages.json'
import NoData from '../NoData/NoData';

const Mars = ({ selectedDate, data }) => {
  return (
    <section className='mars-section'>
      {!(data.length === 0) ? (<>
        <h2>{`${msgCorrespondsMars} ${data[0].earth_date}`}</h2>
        <div className='mars-figures'>
          {data.map((photo) => (
            <Figure key={photo.id} imageSrc={photo.img_src} extraInformation={<>{cameraFullname[photo.camera.name]} <span>@</span> {photo.rover.name}</>}></Figure>
          ))}
        </div>
      </>) : (<NoData selectedDate={selectedDate}></NoData>)}
    </section >

  )
};

export default Mars

