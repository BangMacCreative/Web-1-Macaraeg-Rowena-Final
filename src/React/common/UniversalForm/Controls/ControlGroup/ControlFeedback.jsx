import React from 'react';
import styled from 'styled-components';

const ControlFeedback = ({id}) => {

    return (
        <ControlFeedbackStyled className='ControlFeedback'>
            ControlFeedback 
        </ControlFeedbackStyled>
    );
}

export default ControlFeedback;

const ControlFeedbackStyled = styled.div`
    color: #b10202;
    padding: 5px 0px;
    font-weight: bold;
`;