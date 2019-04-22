import React from 'react';
import './Card.scss';

import CardBanner from './CardBanner.js'
import CardContent from './CardContent.js'

function CardContainer(){
    return(
        <a href="https://www.reactjs.org">
        <CardBanner />
        <CardContent />
        </a>
    )
}
export default CardContainer