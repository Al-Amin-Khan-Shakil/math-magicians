import { useState } from 'react';
import './CalculatorUI.css';
import calculate from './logics/calculate';

function CalculatorButtons() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (button) => {
    const output = calculate(state, button);
    setState(output);
  };

  return (
    <div className="main-container">
      <div className="cal-container">
        <div className="output">
          <div className="display">
            {state.next || state.total || state.operation || '0'}
          </div>
        </div>
        <button
          type="button"
          className="keypad"
          value="AC"
          onClick={(event) => handleClick(event.target.value)}
        >
          AC
        </button>
        <button
          type="button"
          className="keypad"
          value="+/-"
          onClick={(event) => handleClick(event.target.value)}
        >
          +/-
        </button>
        <button
          type="button"
          className="keypad"
          value="%"
          onClick={(event) => handleClick(event.target.value)}
        >
          %
        </button>
        <button
          type="button"
          className="keypad last-col"
          value="&#247;"
          onClick={(event) => handleClick(event.target.value)}
        >
          &#247;
        </button>
        <button
          type="button"
          className="keypad"
          value="7"
          onClick={(event) => handleClick(event.target.value)}
        >
          7
        </button>
        <button
          type="button"
          className="keypad"
          value="8"
          onClick={(event) => handleClick(event.target.value)}
        >
          8
        </button>
        <button
          type="button"
          className="keypad"
          value="9"
          onClick={(event) => handleClick(event.target.value)}
        >
          9
        </button>
        <button
          type="button"
          className="keypad last-col"
          value="x"
          onClick={(event) => handleClick(event.target.value)}
        >
          x
        </button>
        <button
          type="button"
          className="keypad"
          value="4"
          onClick={(event) => handleClick(event.target.value)}
        >
          4
        </button>
        <button
          type="button"
          className="keypad"
          value="5"
          onClick={(event) => handleClick(event.target.value)}
        >
          5
        </button>
        <button
          type="button"
          className="keypad"
          value="6"
          onClick={(event) => handleClick(event.target.value)}
        >
          6
        </button>
        <button
          type="button"
          className="keypad last-col"
          value="-"
          onClick={(event) => handleClick(event.target.value)}
        >
          -
        </button>
        <button
          type="button"
          className="keypad"
          value="1"
          onClick={(event) => handleClick(event.target.value)}
        >
          1
        </button>
        <button
          type="button"
          className="keypad"
          value="2"
          onClick={(event) => handleClick(event.target.value)}
        >
          2
        </button>
        <button
          type="button"
          className="keypad"
          value="3"
          onClick={(event) => handleClick(event.target.value)}
        >
          3
        </button>
        <button
          type="button"
          className="keypad last-col"
          value="+"
          onClick={(event) => handleClick(event.target.value)}
        >
          +
        </button>
        <button
          type="button"
          className="keypad num-zero"
          value="0"
          onClick={(event) => handleClick(event.target.value)}
        >
          0
        </button>
        <button
          type="button"
          className="keypad"
          value="."
          onClick={(event) => handleClick(event.target.value)}
        >
          .
        </button>
        <button
          type="button"
          className="keypad last-col"
          value="="
          onClick={(event) => handleClick(event.target.value)}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default CalculatorButtons;
