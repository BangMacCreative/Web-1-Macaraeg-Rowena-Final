import React from 'react';
import styled from 'styled-components';

const ServiceMenuItem = ({category}) => {

    return (
        <ServiceMenuItemStyled className='ServiceMenuItem'>
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
   
`;