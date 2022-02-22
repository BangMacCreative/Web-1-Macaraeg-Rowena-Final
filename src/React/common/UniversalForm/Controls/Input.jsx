import React from 'react';
import styled from 'styled-components';
import ControlGroup from './ControlGroup/ControlGroup';

const Input = ({label, id, placeholder}) => {

    return (
        <InputStyled className='Input'>
            <ControlGroup id={ id } label={ label }>
            <input
                    id={ id }
                    placeholder = {placeholder}
                />
           </ControlGroup>
        </InputStyled>
    );
}

export default Input;

const InputStyled = styled.div`
    input{
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px gray;
        outline: none;

        &:focus {
            background-color: #eee;
        }
        &.error{
            border: solid 2px red;
        }
    }
`;