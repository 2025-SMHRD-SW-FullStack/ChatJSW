
import './App.css'
import Count from './components/Count'
import MemberInfo from './components/MemberInfo'
import MenuBox from './components/MenuBox'

/*
  1.Component(컴포넌트)
  - UI를 표현하는 최소 단위
  - 컴포넌트를 만들 때 파일명은 반드시 대문자로 정의

*/

function App() {
  return (
    <>
      {/* <div>
        <h1>아메리카노</h1>
        <p>2500</p>
      </div> */}
      {/* <div>
        <h1>카페라뗴</h1>
        <p>2500</p>
        </div>
        <div>
        <h1>콜드브루</h1>
        <p>4000</p>
        </div> */}
        {/* <MenuBox menuNm={"아메리카노"} price={2500}/>
        <MenuBox menuNm={"카페라떼"} price={2500}/>
        <MenuBox menuNm={"콜드브루"} price={4000}/> */}

        {/* 실습) 야구팀 대표 투수 정보(야구팀명, 선수명) */}
        {/* <div className = "container">
          <MemberInfo teamNm={"KIA 타이거즈"} name={"강병우"}/>
          <MemberInfo teamNm={"SSG 랜더스"} name={"김광현"}/>
          <MemberInfo teamNm={"두산 베어스"} name={"곽빈"}/>
          <MemberInfo teamNm={"한화 이글스"} name={"류현진"}/>
        </div> */}

          <Count/>

    </>
  )
}

export default App