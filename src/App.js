
import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Particles from 'react-particles-js';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImageLinkForm from './components/imagelinkform/imagelinkform';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App" >
        <Particles className='particles'
          params={particlesOptions}
        />
        < Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
