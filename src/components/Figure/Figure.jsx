import './Figure.css'

const ImageCard = ({ title, description, extraInformation, imageSrc }) => {
  return (
    <div className='card-container'>
      <img src={imageSrc} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
      <footer>{extraInformation}</footer>
    </div>
  )
}

export default ImageCard