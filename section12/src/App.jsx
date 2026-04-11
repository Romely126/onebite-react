import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'


// 1. "/" : 모든 일기를 조회하는 HOME 페이지
// 2. "/new" : 새로운 일기를 작성하는 NEW 페이지
// 3. "diary" : 일기를 상세히 조회하는 DIARY 페이지
function App() {
  // Routes 컴포넌트 안에는 Route 컴포넌트만 올 수 있다.
  // a태그와 Link 컴포넌트의 차이는 클라이언트 사이드 렌더링 여부 차이
  return (
    <> 
      <div> 
        <Link to = {"/"}>Home</Link>
        <Link to = {"/new"}>New</Link>
        <Link to = {"/diary"}>Diary</Link>
      </div>
      <button>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary" element={<Diary />}></Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App
