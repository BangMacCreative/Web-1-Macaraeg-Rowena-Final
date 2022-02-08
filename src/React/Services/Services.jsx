import React from 'react';
import styled from 'styled-components';

import ServiceGallery from './ServiceGallery/ServiceGallery.jsx';
import ServiceMenu from './ServiceMenu/ServiceMenu.jsx';

const Services = () => {

    return (
        <ServicesStyled className='Services'>
        <h1>Services</h1>
        <ServiceMenu />
        <ServiceGallery />
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    
`;