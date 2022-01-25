import React from 'react';
import styled from 'styled-components';

import SunAndMoon from './SunAndMoon.jsx';
import Essays from'./Essays/Essays.jsx';

const Homework = () => { 
    return (
        <HomeworkStyled>
            <SunAndMoon />
            <Essays />
        </HomeworkStyled>)
}

export default Homework;

const HomeworkStyled = styled.div`
background-color: gray;
padding:20px;
`;