import cameraFullname from '../../utils/cameraFullname';
import Figure from '/src/components/Figure/Figure'
import './Mars.css'
import { msgCorrespondsMars } from '/src/data/messages.json'

const Mars = ({ data }) => {
  return (
    <section className='mars-section'>
      <h2>{`${msgCorrespondsMars} ${data[0].earth_date}`}</h2>
      <div className='mars-figures'>
        {data.map((photo) => (
          <Figure key={photo.id} imageSrc={photo.img_src} extraInformation={`${cameraFullname[photo.camera.name]} @ ${photo.rover.name}`}></Figure>
        ))}
      </div>
    </section>

  )
}

export default Mars

