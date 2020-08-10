import React from 'react';
import Logo from './components/logo/logo';
import Navigation from './components/navigation/navigation';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />

      {/*<ImageLinkForm />
      <FaceRecognition />*/}
    </div>
  );
}

export default App;
