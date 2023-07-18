import './ImageModal.css'

const ImageModal = ({ url, imageInfo, handleModalClose }) => {

  return (
    <div className={'image-modal'} onClick={handleModalClose}>
      <img src={url}></img>
      <footer><p>{imageInfo}</p></footer>
    </div>
  )
};

export default ImageModal