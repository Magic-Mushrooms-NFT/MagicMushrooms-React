import React from 'react';
import { ethers } from "ethers"; 
import styled from 'styled-components';

class Account extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: false,
      address: ''
    }
  }

  render(){

    const requestAccount = async () => {
      console.log("Works");

      if(window.ethereum){
        console.log('detected');

        try{
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          this.setState({
            address: accounts[0],
            signedIn: true
          })

          console.log(this.state.address);



        } catch (error){
          console.log("error");
        }
      }else{
        console.log('Metamask not detected')
      }
    }

    const connectWallet = async () => {
      if(typeof window.ethereum !== 'undefined') {
        await requestAccount();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
      }
    }

    const disconnectWallet = async () => {

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
            {/* <button onClick={disconnectWallet}>Disconnect</button> */}
            <h1>Address:</h1>
            
            <p>{this.state.address}</p>
            <h2>Eth balance: </h2>
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
    font-weight: 200;
  }

  h2 {
    font-weight: 150;
  }

  p {
    text-align: center;
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