import React from 'react';
import styled, { css } from 'styled-components';
import {NavLink} from 'react-router-dom';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const MainMenu = () => {

    return (
        <MainMenuStyled className='MainMenu'>
            <NavLink to={'/'}>Welcome</NavLink>
            <NavLink to={'/services'}>Services</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/homework'}>Homework</NavLink>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`
    
    
    a{
        display: block;
        color: white;
        margin: 5px 0px;
        background-color: #007373;
        height: 50px;
        line-height: 55px;
        text-decoration: none;
        text-align: center;
        
        border-radius: 5px;
        
        text-transform: uppercase;
        font-weight: bold;

        &:hover {
            background-color: #038484;
        }
        &.active {
            color: #007373;
            background-color: #AEE6E6;
        }
    
    }
   @media ${defaultMediaQueries.mdUp}  {
      display: flex;
        justify-content: center;
        a{
        display: inline-block;
        width: 150px;
        margin: 0px 10px;
        font-size: 16px
        border-radius: 5px;
         }
        
    }
`;