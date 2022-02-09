import React from 'react'
import { useState } from 'react';
import "./square.css"

//when you click on a square , we want to do a function which toggles the classname disabled 
//having a CSS that changes due to the symbols 
export default function Square({symbol, changeTurn, value, player1, player2, setPlayer1, setPlayer2}) {

    // symbol - whose turn it is
    // true = cross
    // false = nought

    // changeTurn - changes state of symbol (cross->nought->cross etc)
    // value - where it is in the grid

    const [disable, setDisable] = useState(false);
    const [state, setState] = useState("empty") //changes className

    function handleClick(){
        toggleXO()
        changeTurn()
        
    }

    function toggleXO(){
        if (symbol === true){
            setState("cross")
            setDisable(!disable)
            //console.log("a p1", player1, value)
            setPlayer1([...player1, value])

        } else if (symbol === false) {
            setState("nought")
            setDisable(!disable)
            setPlayer2([...player2, value])
        }
    }


    // display the array in the console


    

    function endGame() {
        console.log("you won")
    }


  return (
    <button type="submit" className={state} onClick={handleClick} disabled={disable}>
    </button>
  )
}
