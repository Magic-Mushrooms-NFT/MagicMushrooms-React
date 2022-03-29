import React from 'react';
import { ethers } from "ethers"; 
import styled from 'styled-components';

class MintStation extends React.Component {
  constructor(props){
    super(props);

  }

  render(){

    let key = '0x23de75afaf2844006de4305aaa345a3a4c470a0334f98dfe417d95ae8cce4b83';
    let provider = new ethers.providers.JsonRpcProvider(process.env.MATIC_RPC_PROVIDER);
    let walletWithProvider = new ethers.Wallet(key, provider);

    let abi = [
      "function mintMushroom(address _minter) public onlyOwner returns (uint256)",
      "event Minted(address _minter, uint256 _tokenID)"
    ];
    let contractAddress = '0x6f02F1d1dC4Cb2E2514C6cB41364658d21E285E7';
    let contract = new ethers.Contract(contractAddress, abi, walletWithProvider);

    const mintNFT = async () => {
      console.log(walletWithProvider.address);
      let tx = await contract.mintMushroom(walletWithProvider.address);
      console.log(tx.hash);
      await tx.wait();
      console.log("Transaction finished")
    }

    return(
      <div>
        <Station>
          <img src={this.props.gif} />
          <h2>Price: 20 ETH</h2>
          <button onClick={mintNFT}>Mint NFT</button>
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