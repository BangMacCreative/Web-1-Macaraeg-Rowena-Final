import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { artData } from './artData.js';

/* Components ---------------------------*/
import ArtGallery from './ArtGallery/ArtGallery.jsx';
import GalleryMenu from './Gallery Menu/GalleryMenu.jsx'

const Gallery = () => {

    const [chosenCategory, chosenCategoryUpdate] = useState('All');
    console.log('chosenCategory', chosenCategory);

    return (
        <GalleryStyled className='Gallery'>
            <h1>Gallery</h1>
            <GalleryMenu categories={ artData.categories } chosenCategory={ chosenCategory} chosenCategoryUpdate={chosenCategoryUpdate}/>
            <ArtGallery art={ artData.art } chosenCategory={chosenCategory}/>
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    
`;