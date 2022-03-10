import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled  className='SiteTitle'>
            <h3> Art for Built Environments </h3> 
        </SiteTitleStyled >
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
        color: white;
        text-align: right;

        h2{
            margin:0px;
            font-size:40px;
        }
        h3{
            margin 0px;
            font-size: 20px
        }
    
`;