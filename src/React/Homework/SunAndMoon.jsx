import React, {useState} from 'react';
import styled from 'styled-components';

const SunAndMoon = () => {

const[theImageSrc, theImageSrcUpdate] = useState('/assets/img/sun.png')
const [theDesc, theDescUpdate] = useState('The Sun');

const changeToMoon = ()=>{
    theImageSrcUpdate('/assets/img/moon.png');
    theDescUpdate('The Moon');
}

const changeToSun = () =>{
    theImageSrcUpdate('/assets/img/sun.png');
    theDescUpdate('TheSun');
}
    return (
    <SunAndMoonStyled> 
       <h2>Sun And Moon Change</h2>

        <img src={theImageSrc} 
        onMouseOver={changeToMoon}
        onMouseOut={changeToSun}
        />

        <h3>The Sun</h3>
    </SunAndMoonStyled>
        )
}

export default SunAndMoon;

const SunAndMoonStyled = styled.div`
background-color: yellow;
text-align: center;
h2{
    color: teal;
    font-size: 50px;
    margin: 0px;
}
h3{
    color: teal;
    font-size: 20px;
    margin: 0px
}
img{
    border: solid 10px teal;
    background-color: white;
}
`;