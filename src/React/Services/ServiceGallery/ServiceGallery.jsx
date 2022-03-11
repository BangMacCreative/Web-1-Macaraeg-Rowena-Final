import React from 'react';
import styled from 'styled-components';

import ServiceGalleryItem from './ServiceGalleryItem.jsx';

const ServiceGallery = ({services, chosenCategory}) => {

    return (
        <ServiceGalleryStyled className='ServiceGallery'>
           {
               services
               .filter ((service) => {
                   return (chosenCategory === 'All' || service.category === chosenCategory);
               })
               .map((service, idx) => {
                    return <ServiceGalleryItem key={ idx } service={ service }/>
                })
            }
        </ServiceGalleryStyled>
    );
}

export default ServiceGallery;


const ServiceGalleryStyled = styled.div`
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
    
`;