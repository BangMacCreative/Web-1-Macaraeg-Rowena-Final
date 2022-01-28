import React from 'react';
import styled from 'styled-components';

import MainMenu from './MainMenu.jsx';

const Nav = () => {

    return (
        <NavStyled className='Nav'>
            <MainMenu /> 
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
background-color: rgb(1, 68, 68);
padding: 20px;
color: white;

`;