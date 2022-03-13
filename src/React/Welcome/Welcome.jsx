import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow/Slideshow.jsx';
import About from './About/About.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';
// import Projects from './Projects/Projects.jsx';
// import  Staff from './Staff/Staff.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <Slideshow/>
            <About/>
             <Tabbed/>
            {/* <Projects/> */}
            {/* <Staff/> */}
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;