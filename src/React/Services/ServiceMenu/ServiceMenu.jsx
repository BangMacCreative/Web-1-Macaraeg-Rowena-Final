import React from 'react';
import styled from 'styled-components';

import ServiceMenuItem from './ServiceMenuItem.jsx';

const ServiceMenu = ({categories}) => {

    return (
        <ServiceMenuStyled className='ServiceMenu'>
            {
                categories.map((category, idx) => {
                    return <ServiceMenuItem key={idx } category={ category }/>
                })
            }
        </ServiceMenuStyled>
    );
}

export default ServiceMenu;

const ServiceMenuStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    
`;