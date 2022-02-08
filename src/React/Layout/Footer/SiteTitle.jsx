import React from 'react';
import styled from 'styled-components';

const SiteTitled = () => {

    return (
        <SiteTitledStyled className='SiteTitled'>
            <h2>Spa Sanctuary :: A SPA for Every Occasion</h2>
            <div className="copyright">&copy; 2022. All rights reserved.</div>
        </SiteTitledStyled>
    );
}

export default SiteTitled;

const SiteTitledStyled = styled.div`
  h2{
            margin: 5px 0px;
            font-size: 14px;
            color: #a3cfcf;

  } 
  .copyright {
        font-size: 14 px;
        color: #a3cfcf
  } 
`;