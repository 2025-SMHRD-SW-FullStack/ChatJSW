import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import BoardArea from './BoardArea'

const DiceGame2 =() => {

  const imgPath = "src/assets/img/dice";

  // const [userScore, setUserScore] = useState(0);
  // const [userDiceImg, setUserDiceImg] = useState(`${imgPath}1.png`);
  const [user,setUser] = useState({imgPath:`${imgPath}1.png`, score:0});
  
  // const [comScore, setComScore] = useState(0);
  // const [comDiceImg, setComDiceImg] = useState(`${imgPath}1.png`);
  const [com, setCom] = useState({imgPath:`${imgPath}1.png`, score:0});

  const throwDice =() => {

    let userIndex = parseInt(Math.random()*6)+1;
    let comIndex = parseInt(Math.random()*6)+1;

    let userScore = user.score;
    let comScore = com.score;

    if (userIndex > comIndex) {
      userScore += 1;
    } else if (userIndex < comIndex) {
      comScore += 1;
    } else if (userIndex === comIndex){
      alert('비겼습니다!');
    }

    // setUserDiceImg(`${imgPath}${userIndex}.png`);
    // ...(전개 연산자)
    // ex) let user = {imgPath:"~", score:0}
    // console.log(...user);
    // 출력 => imgPath:"~", score:0
    // 변경 => imgPath:"새로운 경로", score:0
    setUser({
      ...user,
      imgPath:`${imgPath}${userIndex}.png`,
      score : userScore
    })
    // setComDiceImg(`${imgPath}${comIndex}.png`);
    setCom({
      ...com,
      imgPath:`${imgPath}${comIndex}.png`,
      score : comScore
    })

  }

  const initDice = () => {
    setUserDiceImg("src/assets/img/dice1.png");
    setUserScore(0);
    setComDiceImg("src/assets/img/dice1.png");
    setComScore(0);
  }

  return (
    <div className='container'>
        <h1>주사위게임</h1>
        <ButtonArea throwDice={throwDice} initDice={initDice}/>
        <BoardArea user={user} com={com}/>
    </div>
  )
}

export default DiceGame2