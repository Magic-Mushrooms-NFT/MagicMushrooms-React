import React from 'react';
import styled from 'styled-components';


class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    const picture = require('./ElephantNFT.jpeg')

    return(
      <div>
        <Box>
          <img src={picture} />
          <h1>{this.props.name}</h1>
          <h2>{this.props.role}</h2>
        </Box>
      </div>
    );
  }
}

const Box = styled.div`
  width: 300px;
  height: 380px;
  border: 3px solid #508476;
  border-radius: 15px;
  padding-top: 20px;

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