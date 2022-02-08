import React from 'react';
import styled from 'styled-components';

const ServiceGalleryItem = ({service}) => {

    return (
        <ServiceGalleryItemStyled className='ServiceGalleryItem'>
            <img src={ service.image } alt={ service.title } />
            <h3>{ service.title } :: { service.category }</h3>
        </ServiceGalleryItemStyled>
    );
}

export default ServiceGalleryItem;

const ServiceGalleryItemStyled = styled.div`
    
`;