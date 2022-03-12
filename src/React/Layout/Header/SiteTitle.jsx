import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled  className='SiteTitle'>
            <h3> custom art for built environments </h3> 
        </SiteTitleStyled >
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
        color: white;
        display: flex;
        text-align: left;
    

        h2{
            margin:0px;
            font-size:40px;
        }
        h3{
            margin 0px;
            font-size: 20px
        }
    
`;