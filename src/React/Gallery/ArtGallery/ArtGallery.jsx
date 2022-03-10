import React from 'react';
import styled from 'styled-components';

import ArtGalleryItem from './ArtGalleryItem.jsx';

const ArtGallery = ({art, chosenCategory}) => {

    return (
        <ArtGalleryStyled className='ArtGallery'>
            {
               art
               .filter ((art) => {
                   return (chosenCategory === 'All' || art.category === chosenCategory);
               })
               .map((art, idx) => {
                    return <ArtGalleryItem key={ idx } art={ art }/>
                })
            }
        </ArtGalleryStyled>
    );
}

export default ArtGallery;

const ArtGalleryStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`;