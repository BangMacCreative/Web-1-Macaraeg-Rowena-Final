import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { servicesData } from './servicesData.js';

/* Components ---------------------------*/
import ServiceGallery from './ServiceGallery/ServiceGallery.jsx';
import ServiceMenu from './ServiceMenu/ServiceMenu.jsx';

const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <h1>Services</h1>
            <ServiceMenu categories={ servicesData.categories } />
            <ServiceGallery services={ servicesData.services } />
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    
`;