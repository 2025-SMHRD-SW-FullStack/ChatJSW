import React from 'react'

const App2 = () => {

    let name = prompt("너의 이름은?");
    //날짜, 시간 관련정보를 가진 객체
    let today = new Date();
    console.log(today);
    console.log(today.toLocaleDateString()); //현지 시간 기준 날짜(년/월/일) 반환
    console.log(today.getMonth() + 1); //getMonth는 0부터 11이기 때문에 +1을 해줘야함  
    let month = today.getMonth() + 1;
    let season = "";
    if(month>=3 && month<=5) {
        season = "봄입니다."
    } else if(month>=6 && month<=8) {
        season = "여름입니다."
    } else if(month>=9 && month<=11) {
        season = "가을입니다."
    } else {
        season = "겨울입니다."
    }
    
    return (
        <div>
            
            <h1>{today.toLocaleDateString()}</h1>
            <hr/>
            {name}님 지금은 {season} 좋은 하루 보내세요{":)"}
            
        </div>
  )
}



export default App2


