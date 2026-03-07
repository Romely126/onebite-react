import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  // 전달할 props값이 많은 경우 객체로 전달, 스프레드 연산자 활용
  const ButtonProps = { 
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...ButtonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button>
    </>
  );
}

export default App;