import React from 'react';
import styled from 'styled-components';

const Lightbox = ({title, activeContent, modalContent}) => {

    return (
        <LightboxStyled className='Lightbox'>
            <h3>Lightbox</h3>
            {activeContent} 
            {title}
            {modalContent}
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    
`;