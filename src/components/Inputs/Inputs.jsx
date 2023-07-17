import { msgSelectDate, msgSelectApi } from '/src/data/messages.json'
import './Inputs.css'
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useState } from 'react';
import InputButton from './InputButton/InputButton';
const Inputs = ({ setSelectedApi, setSelectedDate, selectedApi, selectedDate, today }) => {
  //const [startDate, setStartDate] = useState(new Date(selectedDate));
  const handleDateInput = (date) => {
    setSelectedDate(new Date(date))
    //setStartDate(ev)
    //setSelectedDate(ev.target.value.toLocaleString());
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
}

export default Inputs