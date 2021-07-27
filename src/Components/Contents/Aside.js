import React from 'react';
import './Aside.css';

const Aside = ( props ) => {
    
    const { subtitle } = props;
    
    return (
            <aside className="side">
                <h2>{ subtitle }</h2>
                <div className="sub_nav">
                    <ul className="dep1"></ul>
                </div>
                <br></br>
                <img src={require("../../Asset/subpage/left.jpeg").default} />
                <br></br>
            </aside>
    );
};

export default Aside;