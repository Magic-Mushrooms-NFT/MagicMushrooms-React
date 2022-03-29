import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Mint from './Pages/Mint';
import Team from './Pages/Team';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

/*
  New customized tag for Navbar (responsiveMenu)
*/
const Menu = styled.div`
  
  border-bottom: 2px solid MediumPurple;
  background-color: silver;
  text-align: center;
  
  margin-top: 0px;
  
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: MediumPurple;
    &:hover {
      color: burlywood;
      font-weight: 500;
    }
  }
  
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Menu>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Mint'>Mint</Link>
        </li>
        <li>
          <Link to='/Team'>Team</Link>
        </li>
        {/* <button>Connect<br/>Wallet</button> */}
      </ul>
    </Menu>
      <Routes>
        <Route path='/' element={<Home className='home'/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Mint' element={<Mint />} />
        <Route path='/Team' element={<Team />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
