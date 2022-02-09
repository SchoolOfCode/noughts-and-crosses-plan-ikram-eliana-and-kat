import React, {useState} from 'react'
import "./board.css"
import Square from '../Square'

export default function Board() {

 const [symbol, setSymbol] = useState(true)
 const [player1, setPlayer1] = useState([])
 const [player2, setPlayer2] = useState([])
 const keyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]



  function changeTurn() {
    console.log(symbol)
    setSymbol(!symbol) //true = cross, // false=nought
    console.log("p1", player1)
    console.log("p2", player2)
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
        <div className="grid-item" key={item}><Square value={item} symbol={symbol} player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} changeTurn={changeTurn}/></div>
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
