import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { artData } from './artData.js';

/* Components ---------------------------*/
import ArtGallery from './ArtGallery/ArtGallery.jsx';
import GalleryMenu from './GalleryMenu/GalleryMenu.jsx'
import GalleryMenuItem from './GalleryMenu/GalleryMenuItem.jsx';

const Gallery = () => {

    const [chosenCategory, chosenCategoryUpdate] = useState('All');
    console.log('chosenCategory', chosenCategory);

    return (
        <GalleryStyled className='Gallery'>
            <h1>Gallery</h1>
            <GalleryMenuItem/>
            <GalleryMenu categories={ artData.categories } chosenCategory={ chosenCategory} chosenCategoryUpdate={chosenCategoryUpdate}/>
            <ArtGallery art={ artData.art } chosenCategory={chosenCategory}/>
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    
`;