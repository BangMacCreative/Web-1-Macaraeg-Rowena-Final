import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Lightbox from 'React/common/Lightbox/Lightbox.jsx';

const Contact = () => {
    const ActiveContent = () => {
        return <img src="/assets/img/moon.png"/>;
    }
const ModalContent = () => {
        return <img src="/assets/img/sun.png"/>;
    }
    return (
        <ContactStyled className='Contact'>
            <h1>Contact </h1>
            
            <Lightbox 
            title='Sun Pop Up'
            activeContent={ <ActiveContent /> }
            modalContent={<ModalContent />}
            />

        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;