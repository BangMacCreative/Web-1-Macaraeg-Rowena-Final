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
    border-bottom: solid 5px teal;
    line-height: 40px;
    text-align: center;
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-color: #eeeeee;
    }
    &.active {
        background-color: teal;
        color; white;
    }
`;