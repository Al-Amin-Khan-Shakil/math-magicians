import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import CalculatorButtons from './components/CalculatorUI';
import Quotes from './components/Quotes';
import Home from './components/Home';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Math Magicians</div>
        <ul>
          <li>
            <NavLink to="/" className="navlink">Home</NavLink>
          </li>
          <li>
            <NavLink to="/calculator" className="navlink">Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/quotes" className="navlink">Quotes</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorButtons />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
