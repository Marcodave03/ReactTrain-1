//penggunaan library react

import React, { useState } from 'react';
import logo from './logo.svg';
import './App2.css';
import { sebuahVariable } from './adaNamanya';
import { baseUrl } from './IApp2.interface';
const axios = require('axios')

function App2() {
  const [todo,setTodo] = useState<any>()
  const fetchApi = async () => {
    //const res = axios.get(baseUrl+"todos/1")
    const res = axios.get(`${baseUrl}todos/1`)
    console.log(res.data)
    setTodo(res.data)
  }
  return (
    <div className="App">
        {
            todo?.title
        }
        <button onClick={()=>{fetchApi()}}>Hit API</button>

    {/*     
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App2;
