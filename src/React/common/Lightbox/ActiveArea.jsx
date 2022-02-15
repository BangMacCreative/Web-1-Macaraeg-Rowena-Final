import React from 'react';
import styled from 'styled-components';

const ActiveArea = ({activeContent, showModalUpdate}) => {

    const clickHandler = () => {
        showModalUpdate(true);
    }
    return (
        <ActiveAreaStyled className='ActiveArea' onClick={clickHandler}>
            ActiveArea 
            { activeContent }
        </ActiveAreaStyled>
    );
}

export default ActiveArea;

const ActiveAreaStyled = styled.div`
    border: solid 5px purple;  
`;