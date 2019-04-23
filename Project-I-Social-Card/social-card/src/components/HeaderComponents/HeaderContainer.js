import React from 'react';
import './Header.scss';
import HeaderTitle from './HeaderTitle.js'
import  ImageThumbnail from './ImageThumbnail.js';

function HeaderContainer() {
    return (
        <div class="header">
            <ImageThumbnail />
            <HeaderTitle />
        </div>
    )
} 

export default HeaderContainer 