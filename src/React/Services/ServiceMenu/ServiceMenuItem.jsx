import React from 'react';
import styled from 'styled-components';

const ServiceMenuItem = ({category, chosenCategory, chosenCategoryUpdate}) => {

    const clickHandler = () => {
        chosenCategoryUpdate(category);
    }
    const theClassName = (chosenCategory === category) ? 'ServiceMenuItem active': 'ServiceMenuItem';
    
    return (
        <ServiceMenuItemStyled className= { theClassName } onClick={clickHandler}>
            { category }
        </ServiceMenuItemStyled>
    );
}

export default ServiceMenuItem;

const ServiceMenuItemStyled = styled.div`
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