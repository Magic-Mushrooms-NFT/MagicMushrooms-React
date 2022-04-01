import React from 'react';
import '../fonts/Nectarine/NectarineDemoRegular-Ea6le.ttf';
import './Home.css';
import mush1 from './MushHome1.png';
class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div class="logo">
          Magic Mushrooms
        </div>
        <div class="bottom">
          <div class="homebox grow">
            <div>
              <img class="imgclass" src ={mush1}/>
            </div>
          </div>
          <div class="homebox">
            2
          </div>
        </div>
      </div>
    )
  }
}

export default Home;