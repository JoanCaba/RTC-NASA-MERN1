import { msgLoading } from '/src/data/messages.json'
import './Loading.css'

const Loading = () => {
  return (
    <section className='loading-section'>
      <h2>{msgLoading}</h2>
      <div className="loading-container">
        <img src="https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-512.png" className="loader-rocket" />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}

export default Loading