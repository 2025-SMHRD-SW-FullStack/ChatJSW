import React from 'react'

const MemberInfo = ({teamNm, name}) => {
  return (
    <div className="team-Info">
        <h4>{teamNm}</h4>
        <span>{name}</span>
    </div>
  )
}

export default MemberInfo



