import React from 'react';
import { Contract, ethers, providers } from "ethers"; 
import styled from 'styled-components';

class Account extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: false,
      signer: '',
      address: null
    }
  }

  render(){
    const provider = new providers.Web3Provider(window.ethereum, 'maticmum');

    const connectWallet = async () => {
      
      await provider.send("eth_requestAccounts", []);
      const _signer = provider.getSigner();
      this.setState({
        signer: _signer,
        signedIn: true,
        address: await _signer.getAddress()
      });
      console.log("Account: ", await this.state.signer.getAddress())
      this.props.updateAddress(await this.state.signer.getAddress())
    }

    if(!this.state.signedIn){
      return(
        <div>
          <Address2>
            <button onClick={connectWallet}>Connect Wallet</button>
          </Address2>
        </div>
      )
    }else{
      return(
        <div>
          <Address>
            <h1>Address:</h1>
            <p>{this.state.address}</p>
          </Address>
        </div>
      )
    }    
  }
}

const Address = styled.div`
  width: 400px;
  height: 150px;
  border: 3px solid #508476;
  border-radius: 15px;
  padding-left: 10px;

  text-align: left;

  background-color: #686D95;

  h1 {
    color: burlywood;
    font-weight: 300;
    margin-top: 30px;
  }

  h2 {
    font-weight: 150;
  }

  p {
    text-align: center;
    font-size: 15px;
  }
`;

const Address2 = styled.div`
  width: 400px;
  height: 150px;
  border: 3px solid #508476;
  border-radius: 15px;
  padding-left: 10px;

  text-align: center;

  background-color: #686D95;

  button {
    width: 200px;
    height: 50px;
    border-radius: 60px;
    background-color: burlywood;
    border: 3px solid #508476;
    font-size: 20px;
    font-family: monospace;
    margin-top: 50px;
  }
`;

export default Account;