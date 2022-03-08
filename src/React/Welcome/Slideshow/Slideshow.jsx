import React from 'react';
import styled from 'styled-components';

import { slidesData } from './slidesData.js';

import Slide from './Slide.jsx';

const Slideshow = () => {
    return (
        <SlideshowStyled className='Slideshow'>
            Slideshow 
            {
                    slidesData.map ((slide, idx) => {
                        return <Slide key = { idx } slide = {slide} />
                    })
            }
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`
    
`;