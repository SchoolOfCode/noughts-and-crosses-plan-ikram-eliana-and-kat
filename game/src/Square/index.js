import React from 'react'
import { useState } from 'react';
import "./square.css"

//when you click on a square , we want to do a function which toggles the classname disabled 
//having a CSS that changes due to the symbols 
export default function Square() {
    const [disable, setDisable] = useState(false);
    const  [state, setState] = useState("empty")
    const [symbol ,setSymbol] = useState(true)


    function handleClick(){
        console.log("hello")
        toggleXO()
    }
    function toggleXO(){
        if (symbol === true){
            setState("cross")
        }else {
            setState("nought")
        }
       

    }
    function changeTurn(){
        setSymbol(!symbol)
    }
  return (
    <button type="submit" className={state} onClick={handleClick} disabled={disable}>




    </button>
  )
}
