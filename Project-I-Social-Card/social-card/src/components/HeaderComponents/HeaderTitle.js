import React from 'react';
import './Header.scss';

import HeaderContent from './HeaderContent.js'

function headertitle () {
    return (
        <div className="title">
            <h2 className="boldtitle">Lambda School</h2>
            <h2 className="handle">@LambdaSchool</h2>
            <h2 className="handle">- 26 Jan</h2>
            <HeaderContent />
        </div>
    )
}

export default headertitle