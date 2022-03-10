import React from 'react';
import styled from 'styled-components';

import GalleryMenuItem from './GalleryMenuItem.jsx';

const GalleryMenu = ({categories, chosenCategory, chosenCategoryUpdate}) => {

    return (
        <GalleryMenuStyled className='GalleryMenu'>
            {
                categories.map((category, idx) => {
                    return <GalleryMenuItem key={idx } category={ category } chosenCategory={chosenCategory} chosenCategoryUpdate={chosenCategoryUpdate}/>
                })
            }
        </GalleryMenuStyled>
    );
}

export default GalleryMenu;

const GalleryMenuStyled = styled.div`
   display: flex;
   justify-content: center; 
   margin-bottom: 20px;
`;