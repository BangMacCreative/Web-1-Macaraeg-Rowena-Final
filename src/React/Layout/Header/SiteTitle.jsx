import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled  className='SiteTitle'>
           <div id='container'>
               <h3 className='tagline'> built experience design </h3>
           </div>  
        </SiteTitleStyled >
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    #container{
        width: 260px;
        height: 60px;
        margin-right: 25px;
        display: flex;
        justify-content: flex-start;
        
        .tagline{
            color: white;
            font-size: 25px;
        
        }
    }

`;