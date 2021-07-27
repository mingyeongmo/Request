import React from 'react';
import './Center.css';

const Center = ( props ) => {

    const { subtle } = props;

    return (
        <div className="contents">
            <h3>{ subtle }</h3>
            <center>
                    <img src={require("../../Asset/subpage/onepage1.jpeg").default} />
                    <br></br>
                    <br></br>
                    <img src={require("../../Asset/subpage/onepage2.jpeg").default} />
                    <br></br>
                    <br></br>
            </center>
        </div>
    );
};

export default Center;