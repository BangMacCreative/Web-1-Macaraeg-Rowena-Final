import React from 'react';
import styled from 'styled-components';

const Header = ({title}) => {

    return (
        <HeaderStyled className='Header'>
            { title }
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.div`
    
`;