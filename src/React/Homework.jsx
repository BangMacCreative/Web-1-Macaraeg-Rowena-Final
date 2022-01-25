import React from 'react';
import styled from 'styled-components';

import SunAndMoon from './SunAndMoon.jsx';

const Homework = () => { 
    return (
        <HomeworkStyled>
            <SunAndMoon />
        </HomeworkStyled>)
}

export default Homework;

const HomeworkStyled = styled.div`
background-color: gray;
padding:20px;
`;