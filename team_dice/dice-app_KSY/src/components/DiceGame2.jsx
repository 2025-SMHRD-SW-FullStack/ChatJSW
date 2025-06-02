import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import BoardArea from './BoardArea'


const DiceGame2 = () => {

  const imgPath = "src/assets/img/dice"

  // const [userScore, setUserScore] = useState(0);
  // const [userDiceImg, setUserDiceImg] = useState(`${imgPath}1.png`)
  // const [comScore, setComScore] = useState(0);
  // const [comDiceImg, setComDiceImg] = useState(`${imgPath}1.png`)

  const [user, setUser] = useState({imgPath:`${imgPath}1.png`, score: 0})
  const [com, setCom] = useState({imgPath:`${imgPath}1.png`, score: 0});


  // 주사위 던지기 기능
  const throwDice = () => {
    // alert("던지기 실행")

    // 주사위 눈 생성
    let userIndex = parseInt(Math.random() * 6) + 1;
    let comIndex = parseInt(Math.random() * 6) + 1;

    let userScore = user.score;
    let comScore = com.score;
    
    // 주사위 눈 비교
    if(userIndex > comIndex) {
      userScore += 1;
    } else if (userIndex < comIndex) {
      comScore += 1;
    } else {
      alert("무승부!")
    }

    // 주사위 눈 이미지 변경
    // setUserDiceImg(`${imgPath}${userIndex}.png`);
    setUser({
      ...user, imgPath: `${imgPath}${userIndex}.png`,
      score: userScore
    })
    setCom({
      ...com, imgPath: `${imgPath}${comIndex}.png`,
      score: comScore
    });
  }

    // ...(전개연산자)
    // 객체 혹은 배열을 펼칠 때 사용한다.
    //  ex) let user = {imgPath:"~", score:0}
    //      시스템은 이렇게 인식한다) imgPath: "~", score:0
    //      변경) imgPath: "새로운 경로", score:0

  // 주사위 초기화 기능
  const initDice = () => {
    // alert("초기화")

    setUser({...user, imgPath: `${imgPath}1.png`, score: 0});
    setCom({...com, imgPath: `${imgPath}1.png`, score: 0});

  }

  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice={initDice}/>
        <BoardArea user={user} com={com}/>
    </div>
  )
}

export default DiceGame2