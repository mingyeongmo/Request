import React from 'react';
import Aside from '../Aside';
import Center from '../Center';

const SubContents = () => {
    return (
        <div className="container">
            <Center subtle="사업소개" />
            <Aside subtitle="사업소개" />
        </div>
    );
};

export default SubContents;