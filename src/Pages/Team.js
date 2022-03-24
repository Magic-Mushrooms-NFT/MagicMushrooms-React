import React from 'react';
import styled from 'styled-components';
import Profile from '../Components/Profile';
import './Team.css';

class Team extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1 className='teamTitle'>The Magic Mushroom Team!</h1>
        <div className='container'>
          <Profile className='item' pic='./ElephantNFT.jpeg' name='Daniel Leavitt' role='Full stack developer'/>
          <Profile className='item' emoji='😇' name='Cambria DeVries' role='Artist & Front end developer' />
        </div>
      </div>
    )
  }
}



export default Team;
