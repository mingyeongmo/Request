import React from 'react';
import './Center.css';

const Center = ( props ) => {

    const { subtle } = props;

    return (
        <div className="contents">
            <h3>{ subtle }</h3>
            <center>
                    <img src={require("../../../Asset/subpage/twopage2.jpeg").default} />
                    <br></br>
                    <br></br>
                    <img src={require("../../../Asset/subpage/twopage3.jpeg").default} />
                    <br></br>
                    <br></br>
                    <img src={require("../../../Asset/subpage/twopage4.jpeg").default} />
            </center>
        </div>
    );
};

export default Center;