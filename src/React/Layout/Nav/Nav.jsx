import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries, useMediaQuery } from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import Hamburger from './Hamburger.jsx';
import MainMenu from './MainMenu.jsx';

const Nav = () => {

    const { media } = useMediaQuery ();
    const [showMenu, showMenuUpdate] = useState(false);

    return (
        <NavStyled className='Nav'>
            {
                !media.mdUp &&
                <Hamburger showMenu={showMenu } showMenuUpdate={ showMenuUpdate } />
            }
            {
                showMenu &&
                 <MainMenu /> 
            }
            {
                    (media.mdUp || showMenu) &&
                    <MainMenu showMenuUpdate={ showMenuUpdate }/>
            }
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
background-color: #2d2620;
padding-bottom: 20px;
color: white;

`;