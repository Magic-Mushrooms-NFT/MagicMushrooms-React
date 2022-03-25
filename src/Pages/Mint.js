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
      address: ''
    }
  }

  render() {

    return (
      <div className='container1'>
        <MintStation style="grid-cloumn: 2;" gif={gif}/>
        <Account className='account' />
      </div>
    )
  }
}



export default Mint;