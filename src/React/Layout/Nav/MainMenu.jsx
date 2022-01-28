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
    display: flex;
    justify-content: center;
    
    a{
        width: 150px;
        color: white;
        margin: 0px 10px;
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
`;