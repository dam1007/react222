import React from 'react'

function Footer() {
  return (
    <footer id="footer">
        <div className="inner">
            <div className="footer-top">
                <div className="footer-left">
                    <h3 className="name">Dami</h3>
                    <p>
                        안녕하세요!<br/>
                        더 다양한 정보 확인<br/>
                        drumclass@naver.com
                    </p>
                    <ul className="sns">
                        <li><a href="/" className='ir_pm'>페이스북</a></li>
                        <li><a href="/" className='ir_pm'>인스타그램</a></li>
                        <li><a href="/" className='ir_pm'>유튜브</a></li>
                        <li><a href="/" className='ir_pm'>깃헙</a></li>
                        <li><a href="/" className='ir_pm'>링크</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <ul className="menu">
                        <h3>사이트</h3>
                        <li><a href="/">웹표준 사이트</a></li>
                        <li><a href="/">반응형 사이트</a></li>
                        <li><a href="/">패럴랙스 사이트</a></li>
                        <li><a href="/">포트폴리오 사이트</a></li>
                    </ul>
                    <ul className="menu">
                        <h3>유형</h3>
                        <li><a href="/">이미지 유형</a></li>
                        <li><a href="/">카드 유형</a></li>
                        <li><a href="/">이미지/텍스트 유형</a></li>
                        <li><a href="/">배너 유형</a></li>
                        <li><a href="/">텍스트 유형</a></li>
                        <li><a href="/">푸터 유형</a></li>
                    </ul>
                    <ul className="menu">
                        <h3>스크립트</h3>
                        <li><a href="/">검색 이펙트</a></li>
                        <li><a href="/">퀴즈 이펙트</a></li>
                        <li><a href="/">마우스 이펙트</a></li>
                        <li><a href="/">슬라이드 이펙트</a></li>
                        <li><a href="/">패럴랙스 이펙트</a></li>
                        <li><a href="/">게임 이펙트</a></li>
                    </ul>
                    <ul className="menu">
                        <h3>레퍼런스</h3>
                        <li><a href="/">CSS</a></li>
                        <li><a href="/">FONTS</a></li>
                        <li><a href="/">BLOG</a></li>
                        <li><a href="/">REFERENCE</a></li>
                        <li><a href="/">TUTORIAL</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright 2022. All Rights Reserved. - Designed by Dami</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer