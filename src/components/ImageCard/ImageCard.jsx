import './ImageCard.css'

const ImageCard = ({ title, description, extraInformation, imageSrc }) => {
  return (
    <div className='card-container'>
      <img src={imageSrc} alt={title}></img>
      <h2>{title}</h2>
      <p>{description}</p>
      <footer>{extraInformation}</footer>
    </div>
  )
}

export default ImageCard