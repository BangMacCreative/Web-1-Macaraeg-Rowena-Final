import React from 'react';
import styled from 'styled-components';

import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

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
    width: 50%;
    padding: 5px;
    position: relative;
    
    img{
        width: 100%;
    }

    h3{
        background-color: rgba(0, 128, 128, 0.715);
        margin: 0px;
        padding: 10px;

        font-size: 14px;

        position: absolute;
        left: 5px;
        right: 5px;
        bottom: 5px;
    }
    @media ${defaultMediaQueries.mdUp} {
        width: 33%;
        padding: 5px;
        h3 { font-size: 16px;}
    }

    @media ${defaultMediaQueries.lgUp} {
        width: 25%;
        padding: 5px;
        h3 { font-size: 18px;}
    }
`;