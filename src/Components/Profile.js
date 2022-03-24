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
          <img src={this.props.pic} />
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
`;

export default Profile;