import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

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
    
`;