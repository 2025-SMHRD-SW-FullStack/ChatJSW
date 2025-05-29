import React from 'react'

// const MenuBox = (props) => {

//     console.log("App 컴포넌트에서 전달받은 값:", props);
//   return (
//     <div>
//         <h1>{props.menuNm}</h1>
//         <p>{props.price}</p>
//     </div>
//   )
// }

//구조분해할당
// {"props" : {"menuNm":"아메리카노", "price":2500}}
// const {menuNm, price} = props;
const MenuBox = ({menuNm, price}) => {

  return (
    <div>
        <h1>{menuNm}</h1>
        <p>{price}</p>
    </div>
  )
}

export default MenuBox