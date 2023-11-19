import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //Krisandy Trainer 2
  let value = " Welcome Hello World ";

  const printName = () => {
    return(
      <div>
        This is my first React Training
      </div>
    )
  }

  return (
    <div className="App">

      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        {printName()}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          {value};
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
