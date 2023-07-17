import ImageModal from '../ImageModal/ImageModal'
import './Figure.css'
import { useState } from 'react'
const ImageCard = ({ title, description, extraInformation, imageSrc, imageSrcHd }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClick = () => setModalOpen(!modalOpen);
  const imageDescription = title ? title : extraInformation
  return (
    <div className='card-container' >
      <img className='card-image' src={imageSrc} alt={imageDescription} onClick={handleModalClick} ></img>
      {modalOpen && (<ImageModal url={imageSrcHd ? imageSrcHd : imageSrc} imageInfo={imageDescription} handleModalClose={handleModalClick}></ImageModal>)}
      {title && (<h3>{title}</h3>)}
      {description && (<p>{description}</p>)}
      <footer>{extraInformation}</footer>
    </div >
  )
}

export default ImageCard