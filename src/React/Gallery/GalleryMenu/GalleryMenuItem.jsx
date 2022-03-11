import React from 'react';
import styled from 'styled-components';

const GalleryMenuItem = ({category, chosenCategory, chosenCategoryUpdate}) => {
    
    const clickHandler = () => {
        chosenCategoryUpdate(category);
    }
    const theClassName = (chosenCategory === category) ? 'GalleryMenuItem active': 'GalleryMenuItem';
    
    return (
        <GalleryMenuItemStyled className={ theClassName } onClick={clickHandler}>
        { category }
        </GalleryMenuItemStyled>
    );
}

export default GalleryMenuItem;

const GalleryMenuItemStyled = styled.div`
    width: 150px;
    font-size: 18px;
    background-color: #f3f0e7;
    line-height: 40px;
    text-align: center;
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-color: #696566;
        color: white;
    }
    &.active {
        background-color: #2d2620;
        color: white;
    }
`;