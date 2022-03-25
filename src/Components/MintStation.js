import React from 'react';
import { ethers } from "ethers"; 
import styled from 'styled-components';

class MintStation extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <Station>
          <img src={this.props.gif} />
          <h2>Price: 20 ETH</h2>
          <button>Mint NFT</button>
        </Station>
      </div>
    )
  }
}

const Station = styled.div`
  width: 300px;
  height: 380px;
  border: 3px solid #508476;
  border-radius: 15px;
  background-color: #686D95;

  text-align: center;

  img {
    width: 200px;
    margin: auto;
    border-radius: 25%;
    margin-top: 30px;
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  button {
    width: 200px;
    height: 50px;
    border-radius: 60px;
    background-color: burlywood;
    border: 3px solid #508476;
    font-size: 20px;
    font-family: monospace;
  }
`;

export default MintStation;