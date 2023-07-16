import { msgSelectDate, msgSelectApi } from '/src/data/messages.json'
import './Inputs.css'

const Inputs = ({ setSelectedApi, setSelectedDate, selectedDate, today }) => {
  const handleDateInput = (ev) => {
    setSelectedDate(ev.target.value.toLocaleString());
  };
  const handleApiInput = (ev) => {
    setSelectedApi(ev.target.value.toLocaleString());
  };
  return (
    <div className='inputs-container'>
      <div>
        <label htmlFor="select-date">{msgSelectDate}: </label>
        <input id="select-date" type='date' value={selectedDate}
          min="1995-06-16" max={today} onChange={handleDateInput}></input>
      </div>
      <div>
        <label htmlFor="select-api">{msgSelectApi}: </label>
        <select id="select-api" onChange={handleApiInput}>
          <option value='apod'>APOD</option>
          <option value='mars'>MARS</option>
        </select>
      </div>
    </div>
  )
}

export default Inputs