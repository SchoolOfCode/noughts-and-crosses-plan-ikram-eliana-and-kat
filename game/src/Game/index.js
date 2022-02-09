import React, {useState} from 'react'
import Board from '../Board'

export default function Game() {

  const [state, setState] = useState("empty")

  function resetBoard() {
    setState("empty")
  }


  return (
    <div>
    <button onClick={resetBoard}>Reset</button>
   <Board state={state} setState={setState} />
   </div>
  )
}
