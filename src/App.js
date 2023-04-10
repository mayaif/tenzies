import React, { useState, useEffect} from "react";
import { nanoid } from "nanoid";
import './App.css';
import Die from "./Die";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die => die.value === firstValue)
      if (allHeld && allSameValue) {
          setTenzies(true)
      }
  }, [dice])
  
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }
  
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice;
  } 

  function rollDice() {
    if(!tenzies){
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }));
    }else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} : 
        die
    }))
  }

  const diceEmements = dice.map(die => 
    <Die
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      holdDice = {() => holdDice(die.id)}
    />
    )
  return (
    <>
      {tenzies && <Confetti /> } 
    
    <div className="container">
    
      <main>
      {!tenzies ? 
      
       (<div><h1 className="title">Tenzi</h1>
       <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p></div>
       ) : (<div><h1 className="win bounce-1">You win!🏆</h1></div>)}
    
      <div className="dice-container">
        {diceEmements}
      </div>
      <button className="roll-dice"  onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
    </div>
  </>
  );
}

export default App;
