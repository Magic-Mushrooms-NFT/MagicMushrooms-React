import React from 'react';
import { ethers } from "ethers";
import Account from '../Components/Account';
import MintStation from '../Components/MintStation';
import './Mint.css';
import gif from './MushroomGif.gif';

class Mint extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: null
    }
  }

  getAddress = (accountData) => {
    this.setState({
      address: accountData
    })
  }

  render() {
    return (
      <div className='container1'>
        <MintStation gif={gif} address={this.state.address}/>
        <Account updateAddress={this.getAddress}/>
      </div>
    )
  }
}



export default Mint;