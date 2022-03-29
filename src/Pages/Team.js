import React from 'react';
import styled from 'styled-components';
import Profile from '../Components/Profile';
import './Team.css';
import elephant from './ElephantNFT.jpeg';
import garden from './IMG_1441.PNG';

class Team extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div >
        <h1 className='teamTitle'>The Magic Mushroom Team!</h1>
        <div className='container'>
          <Profile pic={elephant} name='Daniel Leavitt' role='Full stack developer'/>
          <Profile pic={garden} name='Cambria DeVries' role='Artist & Front end developer' />
        </div>
      </div>
    )
  }
}



export default Team;
