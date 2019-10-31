import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from '../src/components/Display'
import Dashboard from './components/Dashboard'

function App() {
  const [strike, setStrike] = useState(0);
  const [balls, setBalls] = useState(0);

  const changeStrike = () =>{
      if (strike >= 3 )
          return setStrike(0)
      return setStrike(strike+1)
  }

   const changeBalls = () => {
      if (balls >= 3 )
          return setBalls(0)
      return setBalls(balls+1)
  }

   const changeFoul = () => {
      if (strike >= 2)
          return
      return setStrike(strike+1)
  }


   const changeHit = () => {
      setStrike(0);
      setBalls(0)
  }
  return (
    <div className="App">
      <Display strike = {strike} balls = {balls}/>
      <Dashboard changeHit = {changeHit} changeFoul = {changeFoul} changeBalls = {changeBalls} changeStrike = {changeStrike}/>
    </div>
  );
}

export default App;
