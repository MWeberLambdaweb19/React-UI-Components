import React from 'react';
import './Header.scss';

import HeaderContent from './HeaderContent.js'
import RealTime from './realtime.js'

function headertitle () {
    return (
        <div className="title">
            <h2 className="boldtitle">Lambda School</h2>
            <h2 className="handle">@LambdaSchool</h2>
            <div className="handle">
            <RealTime />
            </div>
            <HeaderContent />
        </div>
    )
}

export default headertitle