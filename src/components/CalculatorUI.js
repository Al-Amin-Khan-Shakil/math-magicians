import './CalculatorUI.css';

function CalculatorButtons() {
  return (
    <div className="main-container">
      <div className="cal-container">
        <div className="output" dir="rtl">
          0
        </div>
        <button type="button" className="keypad" value="AC">
          AC
        </button>
        <button type="button" className="keypad" value="+/-">
          +/-
        </button>
        <button type="button" className="keypad" value="%">
          %
        </button>
        <button type="button" className="keypad last-col" value="&#247;">
          &#247;
        </button>
        <button type="button" className="keypad" value="7">
          7
        </button>
        <button type="button" className="keypad" value="8">
          8
        </button>
        <button type="button" className="keypad" value="9">
          9
        </button>
        <button type="button" className="keypad last-col" value="x">
          x
        </button>
        <button type="button" className="keypad" value="4">
          4
        </button>
        <button type="button" className="keypad" value="5">
          5
        </button>
        <button type="button" className="keypad" value="6">
          6
        </button>
        <button type="button" className="keypad last-col" value="-">
          -
        </button>
        <button type="button" className="keypad" value="1">
          1
        </button>
        <button type="button" className="keypad" value="2">
          2
        </button>
        <button type="button" className="keypad" value="3">
          3
        </button>
        <button type="button" className="keypad last-col" value="+">
          +
        </button>
        <button type="button" className="keypad num-zero" value="0">
          0
        </button>
        <button type="button" className="keypad" value=".">
          .
        </button>
        <button type="button" className="keypad last-col" value="=">
          =
        </button>
      </div>
    </div>
  );
}

export default CalculatorButtons;
