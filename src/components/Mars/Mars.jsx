import cameraFullname from '../../utils/cameraFullname';
import Figure from '/src/components/Figure/Figure'

const Mars = ({ data }) => {

  return (
    <div>{data.map((photo) => (
      <Figure key={photo.id} imageSrc={photo.img_src} extraInformation={`${cameraFullname[photo.camera.name]} @ ${photo.rover.name}`}></Figure>
    ))}</div>

  )
}

export default Mars

