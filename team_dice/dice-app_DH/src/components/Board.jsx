import React from 'react'

const Board = ({imgPath,score,player}) => {
  return (
    <div>
      <h4>{player}</h4>
      <img src={imgPath}/>
      
      <div>
        <p>현재 점수는?</p>
        <p>{score}</p>
      </div>
    </div>
  )
}

export default Board
