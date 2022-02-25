import React, { useState } from 'react';
import styled from 'styled-components';

const ControlledInput = () => {
    
    const [username, usernameUpdate] = useState ('');
    
    const handleChange = (e) => {
            console.log('User Wrote', e.target.value);
            usernameUpdate(e.target.value);
    }
    
    return (
        <ControlledInputStyled className='ControlledInput'>
            <input 
            value={ username }
            onChange={ handleChange }
            />
        </ControlledInputStyled>
    );
}

export default ControlledInput;

const ControlledInputStyled = styled.div`
    
`;