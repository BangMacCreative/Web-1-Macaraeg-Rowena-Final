import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import  Staff from './Staff/Staff.jsx';


const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <Slideshow/>
            <h1>About</h1>
            <h1>Portfolio </h1>
            <Tabbed/>
            <Staff/>
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;