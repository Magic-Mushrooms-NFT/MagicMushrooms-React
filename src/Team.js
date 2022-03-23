import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';

class Team extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Profile emoji='😁' name='Daniel Leavitt' role='Full stack developer'/>
        <Profile emoji='😇' name='Cambria DeVries' role='Artist & Front end developer' />
      </div>
    )
  }
}

export default Team;
