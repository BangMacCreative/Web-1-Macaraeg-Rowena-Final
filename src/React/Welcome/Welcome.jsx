import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Slideshow from './Slideshow/Slideshow.jsx';
import About from './About/About.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import UpButton from './UpButton/UpButton.jsx';
// import Staff from './Staff/Staff.jsx';
// import Projects from './Projects/Projects.jsx';


const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <Slideshow/>
            <About/>
            <Tabbed/>
            <UpButton/>
            {/* <Projects/> */}
            {/* <Staff/> */}
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;