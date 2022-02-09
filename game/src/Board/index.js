import React, {useState} from 'react'
import "./board.css"
import Square from '../Square'

export default function Board() {

 //changes className
 const [symbol, setSymbol] = useState(true)
 const [player1, setPlayer1] = useState([])
 const [player2, setPlayer2] = useState([])
 const keyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [toggle, setToggle] = useState(false)


  function changeTurn(symbol, val) {
    if (symbol===true) {
      setPlayer1([...player1, val])
    }
    else {
      setPlayer2([...player2, val])
    }

    setSymbol(!symbol) //true = cross, // false=nought
    
  }

  const winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]


  function calculateWin(symbol,val){
    if (symbol===true) {
      player1.push(val) // the state doesn't update, so force it
      console.log("p1", player1)
    }
    else {
      player2.push(val)
      console.log("p2", player2)
    }

    for (let i=0;i<winningCombos.length;i++) {
      if (player1.includes(winningCombos[i][0]) && player1.includes(winningCombos[i][1]) && player1.includes(winningCombos[i][2])) {
        alert("player 1 win")
        setToggle(!toggle)
      } 
      else if (player2.includes(winningCombos[i][0]) && player2.includes(winningCombos[i][1]) && player2.includes(winningCombos[i][2])) {
        alert("player 2 win")
        setToggle(!toggle)
      }
      else if (player1.length + player2.length === 9) {
        alert("draw")
        setToggle(!toggle)
      }
    }
  }
  


  return (
<div>
    Player1:
    <div className="score">
    {player1.map((item, index) => { return (
      <div key={index} >{item}</div>
    )})}
    </div>
    Player2:
    <div className="score">
    {player2.map((item, index) => { return (
      <div key={index} >{item}</div>
    )})}
    </div>

<br/>

    <div className="grid-container">
   
   { keyArray.map((item) => {
      return (
      <div className="grid-item" key={item}>
      <Square toggle={toggle} setToggle={setToggle} value={item} symbol={symbol} player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} changeTurn={changeTurn} calculateWin={calculateWin}/></div>
      )
   })}
   </div>
</div>
    )

  }


/*     
    <div className="grid-item" key={keyArray[0]}><Square symbol={symbol} changeTurn={changeTurn}/></div>
    <div className="grid-item" key={keyArray[0]}><Square symbol={symbol} changeTurn={changeTurn}/></div>
    <div className="grid-item" key={keyArray[0]}><Square symbol={symbol} changeTurn={changeTurn}/></div>
    <div className="grid-item" key={keyArray[0]}><Square symbol={symbol} changeTurn={changeTurn}/></div>
    <div className="grid-item" key={keyArray[0]}><Square symbol={symbol} changeTurn={changeTurn}/></div>
    <div className="grid-item" key= "7"><Square symbol={symbol} changeTurn={changeTurn}/></div>
    <div className="grid-item" key= "8"><Square symbol={symbol} changeTurn={changeTurn}/></div>
    {/* <div className="grid-item" key= "9"><Square symbol={symbol} changeTurn={changeTurn}/></div> */
/*    
  )
} */
