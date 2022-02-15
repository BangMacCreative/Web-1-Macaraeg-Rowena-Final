import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { servicesData } from './servicesData.js';

/* Components ---------------------------*/
import ServiceGallery from './ServiceGallery/ServiceGallery.jsx';
import ServiceMenu from './ServiceMenu/ServiceMenu.jsx';

const Services = () => {

    const [chosenCategory, chosenCategoryUpdate] = useState('All');
    console.log('chosenCategory', chosenCategory);
    
    return (
        <ServicesStyled className='Services'>
            <h1>Services</h1>
            <ServiceMenu categories={ servicesData.categories } chosenCategory={ chosenCategory} chosenCategoryUpdate={chosenCategoryUpdate}/>
            <ServiceGallery services={ servicesData.services } chosenCategory={chosenCategory}/>
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    
`;