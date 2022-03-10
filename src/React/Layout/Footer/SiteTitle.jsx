import React from 'react';
import styled from 'styled-components';

const SiteTitled = () => {

    return (
        <SiteTitledStyled className='SiteTitled'>
            <h2>Art for Built Environments</h2>
            <div className="copyright">&copy; 2022. All rights reserved.</div>
        </SiteTitledStyled>
    );
}

export default SiteTitled;

const SiteTitledStyled = styled.div`
  h2{
            margin: 5px 0px;
            font-size: 14px;
            color: white;

  } 
  .copyright {
        font-size: 14 px;
        color: white;
  } 
`;