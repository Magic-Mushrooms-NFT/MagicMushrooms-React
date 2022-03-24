import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Mint from './Pages/Mint';
import Team from './Pages/Team';
import ResponsiveMenu from 'react-responsive-navbar';
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
  button {
    background-color: #A5CD7D;
    border: solid;
    border-color: #508476;
    color: #508476;
    padding: 10px 20px;
    margin-left: 27%;
    position: absolute;
    border-radius: 15px;
    text-align: center;
    text-decoration: none;
    // display: inline-block;
    font-size: 16px;
    font-family: monospace;

    &:hover {
      color: white;
      font-weight: 300;
      border: 2px solid #508476;
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
      <ResponsiveMenu
          menuOpenButton={<div />}
          menuCloseButton={<div />}
          changeMenuOn="500px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="small-menu-classname"
          menu={
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
                <button>Connect<br/>Wallet</button>
              </ul>
            </Menu>
          }
        />
      <Routes>
        <Route path='/' element={<Home />} />
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
