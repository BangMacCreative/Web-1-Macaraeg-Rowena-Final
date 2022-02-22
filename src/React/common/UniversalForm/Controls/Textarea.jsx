import React from 'react';
import styled from 'styled-components';
import ControlGroup from './ControlGroup/ControlGroup';

const Textarea = ({label, id, placeholder}) => {

    return (
        <TextareaStyled className='Textarea'>
            <ControlGroup  id={ id } label={ label }>
                <textarea
                    id={ id }
                    placeholder = {placeholder}
                />
           </ControlGroup>
        </TextareaStyled>
    );
}

export default Textarea;

const TextareaStyled = styled.div`
  textarea {
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px gray;
        outline: none;

        height: 250px;
        resize: none;

        &:focus {
            background-color: #eee;
        }
        &.error{
            border: solid 2px red;
        }  
`;