import React, {useState} from 'react'
import Board from '../Board'

export default function Game() {

  //const [reset, setReset] = useState("empty")

  function resetBoard() {

  }


  return (
    <div>
    <button onClick={resetBoard}>Reset</button>
   <Board />
   </div>
  )
}
