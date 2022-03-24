import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profile from './Components/Profile';
import Team from './Pages/Team';


class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Team />
      </div>
    );
  }
}

export default App;
