import React from 'react';
import './header.css';


const Header = () => {
    return (
        <header className="header">
            <div className="head">
                <h1 className="logo">
                    <a href="#"><img src={require("../../Asset/logo.png").default} /></a>
                </h1>

                <div className="List">
                    <ul>
                        <li><a href="#">사업소개</a></li>
                        <li><a href="#">프리미엄</a></li>
                        <li><a href="#">입지환경</a></li>
                        <li><a href="#">단지안내</a></li>
                        <li><a href="#">타입안내</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;