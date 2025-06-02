import React from 'react'
import Board from './Board'

const BoardArea = ({user,com}) => {

  return (
    <div className='board-area'>
        <Board name={"나"} info={user}/>
        <Board name={"COM"} info={com}/>
    </div>
  )
}

export default BoardArea