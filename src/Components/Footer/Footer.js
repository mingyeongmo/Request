import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="foter">
                <div className="address">
                    <span className="one">광주 광산 아델리움 </span>
                    <span className="tel">대표번호:1877 -7905</span>
                    
                    <p>관리자 : 조영훈 ㅣ 010-2340-0085</p>
                    <span>COPYRIGHT@2021 GOLDENTREE ALL RIGHTS RESERVED.</span>
                    <br></br>
                    <span className="copyright">
                        분양홈페이지 제작:
                        <a href="http://www.ateam9.co.kr"> Ateam9 에이팀나인 </a>
                         -  
                        <span> 010-2172-1512</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;