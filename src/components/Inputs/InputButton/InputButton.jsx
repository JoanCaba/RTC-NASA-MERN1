import { forwardRef } from 'react'
import './InputButton.css'

const InputButton = forwardRef(({ value, onClick }, ref) => (
  <button className="date-input" onClick={onClick} ref={ref}>
    {value}
  </button>
));

InputButton.displayName = "InputButtonName";
export default InputButton