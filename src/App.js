import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'


function App() {
  return (
    <div className="App">
      <h1>React app deployed in Kubernetes and login with okta</h1>
        <div className='form-box'>
          <input type="text" name="movieName" placeholder='Name Movie'/>
          <input type="text" name="review" placeholder='Review'/>
          <button type="button" class="btn btn-primary">Submit</button>
        </div>
    </div>
  );
}

export default App;
