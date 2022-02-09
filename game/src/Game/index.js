import React, {useState} from 'react'
import Board from '../Board'

export default function Game() {

  
  function resetBoard() {
    
  }


  return (
    <div>
    <button onClick={resetBoard}>Reset</button>
   <Board />
   </div>
  )
}
