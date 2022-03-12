import React from 'react';
import styled from 'styled-components';

const About = () => {

    return (
        <AboutStyled className='About'>
           <div>
            <h2>At Ripbang Studios, we assist brands, architects, and interior designers in developing memorable
            destinations by seamlessly integrating artwork, graphics, and storytelling into the built environment. 
            We draw from a network of artists, designers, illustrators, and sculptors to create custom art for each project.
            </h2>
           </div>
           <div className='scroll'>
           <h4>Scroll Down to see our work</h4>
           </div>
        </AboutStyled>
    );
}

export default About;

const AboutStyled = styled.div`

`;