import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import  Staff from './Staff/Staff.jsx';
import About from './About/About.jsx';


const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <Slideshow/>
            <About/>
            <Tabbed/>
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;