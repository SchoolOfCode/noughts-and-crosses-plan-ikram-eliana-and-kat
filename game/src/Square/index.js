import React from 'react'
import { useState } from 'react';
import "./square.css"

//when you click on a square , we want to do a function which toggles the classname disabled 
//having a CSS that changes due to the symbols 
export default function Square({symbol, changeTurn, value, calculateWin}) {

    // symbol - whose turn it is
    // true = cross
    // false = nought

    // changeTurn - changes state of symbol (cross->nought->cross etc)
    // value - where it is in the grid
    const [state, setState] = useState("empty")
    const [disable, setDisable] = useState(false);

    function handleClick(){
        let val = toggleXO()
        changeTurn(symbol, val)
        calculateWin(symbol, val)
    }
 

    function toggleXO(){
        if (symbol === true){
            setState("cross")
            setDisable(!disable)
        } else if (symbol === false) {
            setState("nought")
            setDisable(!disable)
        }

        return value
    }


    // display the array in the console

  return (
    <button type="submit" className={state} onClick={handleClick} disabled={disable}>
    </button>
  )
}
