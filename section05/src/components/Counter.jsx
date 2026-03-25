import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
    <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1);
      }}>+</button>

    </div>
  )
}

export default Counter;

// 리랜더링은 언제?
// 1. 자신이 관리하는 state가 변경된 경우
// 2. props가 변경된 경우
// 3. 부모 컴포넌트가 리랜더링 되는 경우
// 따라서 불필요한 리랜더링을 피하기 위해 별개의 컴포넌트로 나누어 각각 리랜더 되도록 처리