import ImageModal from '../ImageModal/ImageModal';
import './Figure.css';
import { useState } from 'react';

const ImageCard = ({ title, description, extraInformation, imageSrc, imageSrcHd }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClick = () => setModalOpen(!modalOpen);
  const imageDescription = title ? title : extraInformation;
  return (
    <div className="card-container">
      <figure>
        <img loading="lazy" src={imageSrc} alt={imageDescription} onClick={handleModalClick} />
        {description && (
          <figcaption>
            {title && <h3>{title}</h3>}
            <p>{description}</p>
          </figcaption>
        )}
      </figure>
      {modalOpen && (
        <ImageModal
          url={imageSrcHd ? imageSrcHd : imageSrc}
          imageInfo={imageDescription}
          handleModalClose={handleModalClick}
        ></ImageModal>
      )}
      <footer>{extraInformation}</footer>
    </div>
  );
};

export default ImageCard;
