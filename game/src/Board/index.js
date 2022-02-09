import React from 'react'
import "./board.css"
import Square from '../Square'
export default function Board() {
  return (
    <div className="grid-container">
    <div className="grid-item" key= "1"><Square/></div>
    <div className="grid-item" key= "2"><Square/></div>
    <div className="grid-item" key= "3"><Square/></div>
    <div className="grid-item" key= "4"><Square/></div>
    <div className="grid-item" key= "5"><Square/></div>
    <div className="grid-item" key= "6"><Square/></div>
    <div className="grid-item" key= "7"><Square/></div>
    <div className="grid-item" key= "8"><Square/></div>
    <div className="grid-item" key= "9"><Square/></div>
   </div>
  )
}
