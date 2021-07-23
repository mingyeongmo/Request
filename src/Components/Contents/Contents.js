import React from 'react';
import "./Contents.css";

// const container = document.querySelector('.content1'),
// slides = document.querySelectorAll('img'),
// slidecounter = slides.length;
// let currentIndex = 0;


// var lele = 0;
// var i = 0;
// function moveleft() {
// if (i < slidecounter - 1) {
//     lele += 100;
//     i++;
//     container.style.transition = '.3s';
//     setTimeout('moveleft()', 3000);
// } else {
//     container.style.transition = '0s'
//     lele = 0;
//     i = 0;
//     setTimeout('moveleft()', 0);
// }

// container.style.left = "-" + lele + "%";

// }

// moveleft();




const Contents = () => {
    return (
        <div className="main_contents">
            <div className="main_slider">
                <div className="content1" val="1" max="2">
                    <img src={require("../../Asset/mainimg2.jpeg").default} />
                    <img src={require("../../Asset/mainimg1.jpeg").default} />
                    <img src={require("../../Asset/mainimg2.jpeg").default} />
                    <img src={require("../../Asset/mainimg1.jpeg").default} />
                </div>
            </div>
            <section className="main_con">
                <div>
                    <div className="section_main">
                        <div className="banner">
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src={require("../../Asset/배너/mainsub1.jpeg").default} />
                                        <p className="txt">
                                            <span>OVERVIEW</span>
                                            사업개요
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={require("../../Asset/배너/mainsub2.jpeg").default} />
                                        <p className="txt">
                                            <span>PREMIUM</span>
                                            프리미엄
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={require("../../Asset/배너/mainsub3.jpeg").default} />
                                        <p className="txt">
                                            <span>LOCATION</span>
                                            입지환경
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={require("../../Asset/배너/mainsub4.jpeg").default} />
                                        <p className="txt">
                                            <span>COMPLEX PLAN</span>
                                            단지안내
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={require("../../Asset/배너/mainsub5.jpeg").default} />
                                        <p className="txt">
                                            <span>TYPE</span>
                                            타입안내
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contents;