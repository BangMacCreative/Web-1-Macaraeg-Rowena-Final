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
        width: 200px;
        height: 60px;
        background-color: #2d2620;
        display: flex;
        justify-content: center;
        margin-right: 30px;
        
        .tagline{
            color: #f3f0e7;
            font-size: 20px;
            display: flex;
        }
    }

`;