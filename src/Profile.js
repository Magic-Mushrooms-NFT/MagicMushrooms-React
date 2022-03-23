import React from 'react';
import styled from 'styled-components';


class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Box>
          <p>{this.props.emoji}</p>
          <h1>{this.props.name}</h1>
          <h2>{this.props.role}</h2>
        </Box>
      </div>
    );
  }
}

const Box = styled.div`
  width: 300px;
  height: 400px;
  border: 3px solid #508476;
  margin: auto;
  border-radius: 15px;

  text-align: center;

  background-color: #686D95;

  img {
    width: 150px;
    margin: auto;
    border-radius: 50%;
    margin-top: 30px;
  }

  h1 {
    font-weight: 200;
    text-align: center;
  }

  h2 {
    font-weight: 100;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 20pt;
    margin-top: 10px;
  }
`;

export default Profile;