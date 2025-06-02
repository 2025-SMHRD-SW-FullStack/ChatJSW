import React from 'react'
import Board from './Board'

const BoardArea = ({userDiceImg,comDiceImg,userScore,comScore}) => {
  const user = '본인';
  const com = '컴푸타';
  return (
    <div className='board-area'>   
        <Board imgPath={userDiceImg} score={userScore} player={user}/>
        <Board imgPath={comDiceImg} score={comScore} player={com}/>
    </div>
  )
}

export default BoardArea
