import { msgSelectDate, msgSelectApi } from '/src/data/messages.json'
import './Inputs.css'
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import InputButton from './InputButton/InputButton';
import es from 'date-fns/locale/es';
registerLocale('es', es)

const Inputs = ({ setSelectedApi, setSelectedDate, selectedApi, selectedDate, today }) => {
  const handleDateInput = (date) => {
    const newDate = new Date(date).toISOString().slice(0, 10);
    setSelectedDate(newDate)
  };
  const handleApiInput = (ev) => {
    setSelectedApi(ev.target.value.toLocaleString());
  };

  return (
    <div className='inputs-container'>
      <div>
        {/* <label htmlFor="select-date">{msgSelectDate}: </label>
        <input id="select-date" type='date' value={selectedDate}
          min="1995-06-16" max={today} onChange={handleDateInput}></input> */}
        <p className='date-label'>{msgSelectDate}: </p>
        <DatePicker
          locale="es"
          selected={new Date(selectedDate)}
          onChange={handleDateInput}
          maxDate={new Date(today)}
          customInput={<InputButton />}
        />
      </div>
      <div>
        <label htmlFor="select-api">{msgSelectApi}: </label>
        <select id="select-api" onChange={handleApiInput} defaultValue={selectedApi}>
          <option value='apod'>APOD</option>
          <option value='mars'>MARS</option>
        </select>
      </div>
    </div >
  )
};

export default Inputs