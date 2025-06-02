import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import BoardArea from './BoardArea'

// 주사위 게임 컴포넌트
const DiceGame2 =() => {
  // 주사위 이미지 경로
  const imgPath = 'src/assets/img/dice';

  // 사용자와 컴퓨터 상태 설정: 초기 점수는 0, 주사위는 1번 이미지
  const [user, setUser] = useState({ score: 0, imgPath: `${imgPath}1.png` });
  const [com, setCom] = useState({ score: 0, imgPath: `${imgPath}1.png` });

  // 주사위 던지기 함수
  const throwDice = () => {
    // 1~6 사이의 랜덤 숫자 생성
    const userIndex = Math.floor(Math.random() * 6) + 1;
    const comIndex = Math.floor(Math.random() * 6) + 1;

    // 새로 나올 주사위 이미지 경로 설정
    const newUserImg = `${imgPath}${userIndex}.png`;
    const newComImg = `${imgPath}${comIndex}.png`;

    // 현재 점수를 복사해둠
    let newUserScore = user.score;
    let newComScore = com.score;

    // 게임 결과에 따라 점수 계산
    if (userIndex === comIndex) {
      alert("무승부!");
    } else if (userIndex > comIndex) {
      newUserScore += 1;
    } else {
      newComScore += 1;
    }

    // 사용자, 컴퓨터 상태 업데이트
    setUser({ ...user,
      score: newUserScore, imgPath: newUserImg });
    setCom({ score: newComScore, imgPath: newComImg });
  }

  // 초기화 함수: 점수와 이미지 초기상태로 리셋
  const initDice = () => {
    alert('초기화 진행');
    setUser({ score: 0, imgPath: `${imgPath}1.png` });
    setCom({ score: 0, imgPath: `${imgPath}1.png` });
  }

  return (
    <div className='container'>
      <h1>🎲 주사위 게임 🎲</h1>

      {/* 버튼 영역 - 던지기 / 초기화 */}
      <ButtonArea throwDice={throwDice} initDice={initDice} />

      {/* 게임 보드 영역 - 주사위 이미지와 점수 전달 */}
      <BoardArea
        userDiceImg={user.imgPath}
        comDiceImg={com.imgPath}
        userScore={user.score}
        comScore={com.score}
      />
    </div>
  )
}

export default DiceGame2;
