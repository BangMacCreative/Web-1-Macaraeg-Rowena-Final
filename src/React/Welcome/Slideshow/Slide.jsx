import React from 'react';
import styled from 'styled-components';
import { slidesData } from './slidesData';

const Slide = ({slide}) => {

    return (
        <SlideStyled className='Slide'>
            <img src= { slide.image } alt={ slide.title } />
            <p className="legend">{ slide.title }</p>
        </SlideStyled>
    );
}

export default Slide;

const SlideStyled = styled.div`
    
`;