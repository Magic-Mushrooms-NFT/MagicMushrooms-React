import React from 'react';
import { ethers } from "ethers";

class Mint extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: ''
    }
  }

  render() {

    const requestAccount = async () => {
      console.log("Works");

      if(window.ethereum){
        console.log('detected');

        try{
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          this.setState({
            address: accounts[0]
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

    return (
      <div>
        <button onClick={connectWallet}>Request account</button>
        <h3>Address: {this.state.address}</h3>
      </div>
    )
  }
}



export default Mint;