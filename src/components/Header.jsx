import React from 'react'

function Header() {
  return (
    <header id="header">
        <h1 className="logo">Drum School</h1>
        <nav>
            <ul className="gnb">
            <li><a href="/">학원 소개</a></li>
            <li><a href="/">클래스 소개</a></li>
            <li><a href="/">강사진 소개</a></li>
            <li><a href="/">입시/오디션 정보</a></li>
            <li><a href="/">오시는 길</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header