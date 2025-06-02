import React from 'react'
import Board from './Board'

const BoardArea = ({user, com}) => {
  return (
    <div className='board-area'>
        <Board name={'나'} data={user}/>
        <Board name={'com'} data={com}/>
    </div>
  )
}

export default BoardArea