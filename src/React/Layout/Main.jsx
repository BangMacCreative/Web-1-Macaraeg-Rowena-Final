import React from 'react';
import styled from 'styled-components';

import Homework from '../Homework/Homework.jsx';
const Main = () => {

    return (
        <MainStyled className='Main'>
            Main 
            <Homework />
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    
`;