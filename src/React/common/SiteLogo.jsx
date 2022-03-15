import React from 'react';
import styled from 'styled-components';


const SiteLogo = () => {

    return (
        <SiteLogoStyled>
            <img src="/assets/img/Logo.png" alt="Ripbang Logo" />
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    width: 100%;
    height: 100%;

    img {
        margin: 10px;
    }

`;