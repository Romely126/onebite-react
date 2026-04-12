import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import Button from './components/button'

import { getEmotionImage } from './util/get-emotion-image'


// 1. "/" : 모든 일기를 조회하는 HOME 페이지
// 2. "/new" : 새로운 일기를 작성하는 NEW 페이지
// 3. "diary" : 일기를 상세히 조회하는 DIARY 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  // Routes 컴포넌트 안에는 Route 컴포넌트만 올 수 있다.
  // a태그와 Link 컴포넌트의 차이는 클라이언트 사이드 렌더링 여부 차이
  return (
    <>
    {/* public 폴더에서 가져온 이미지 */}
    {/* 사이트가 리로드 될 때마다 이미지도 무조건 새로 불러옴 */}
    {/* 이미지 수가 많은 경우 사용 */}
      {/* <div>
        <img src={"/emotion1.png"} />
        <img src={'/emotion2.png'} />
        <img src={'/emotion3.png'} />
        <img src={'/emotion4.png'} />
        <img src={'/emotion5.png'} />
      </div> */}
      {/* assets에서 가져온 이미지 */}
      {/* 이미지 파일을 캐싱해 매번 불러오지 않음 */}
      {/* 이미지가 소수인 경우 사용 */}
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div> 
        <Link to = {"/"}>Home</Link>
        <Link to = {"/new"}>New</Link>
        <Link to = {"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        {/* URL 파라미터 방식으로 동적경로연결 */}
        <Route path="/diary/:id" element={<Diary />}></Route> 
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App
