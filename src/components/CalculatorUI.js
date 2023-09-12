import './CalculatorUI.css';
import Output from './Output';

function CalculatorButtons() {
  return (
    <div className="main-container">
      <div className="cal-container">
        <Output />
        <button type="button" className="keypad">AC</button>
        <button type="button" className="keypad">+/-</button>
        <button type="button" className="keypad">%</button>
        <button type="button" className="keypad last-col">&#247;</button>
        <button type="button" className="keypad">7</button>
        <button type="button" className="keypad">8</button>
        <button type="button" className="keypad">9</button>
        <button type="button" className="keypad last-col">x</button>
        <button type="button" className="keypad">4</button>
        <button type="button" className="keypad">5</button>
        <button type="button" className="keypad">6</button>
        <button type="button" className="keypad last-col">-</button>
        <button type="button" className="keypad">1</button>
        <button type="button" className="keypad">2</button>
        <button type="button" className="keypad">3</button>
        <button type="button" className="keypad last-col">+</button>
        <button type="button" className="keypad num-zero">0</button>
        <button type="button" className="keypad">.</button>
        <button type="button" className="keypad last-col">=</button>
      </div>
    </div>
  );
}

export default CalculatorButtons;