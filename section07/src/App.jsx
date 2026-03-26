import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);  // 마운트 여부 초기화

  //1. 마운트 -> 탄생
  useEffect(()=> {
    console.log("mount");
  }, [])  // 실행 초기 딱 1번 실행. 

  //2. 업데이트 -> 변화/리랜더링
  useEffect(()=> {
    if(!isMount.current){ // 마운트 이후
      isMount.current = true; // 마운트 완료로 처리
      return; // 업데이트 강제 종료
    }
    console.log("update");  // 이후 접근부터 업데이트 처리
  })  // deps는 없음. 컴포넌트 업데이트시마다 실행
  // update가 되었을때만 쓰고싶다면 useRef 사용

  //3. 언마운트 -> 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e)=> {
        setInput(e.target.value);
      }} />
    </section>
    <section>
      <Viewer count={count} />
      {count % 2 === 0? <Even /> : null }
    </section>
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
    </div>
  );
}

export default App;