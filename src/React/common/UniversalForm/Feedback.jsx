import React from 'react';
import styled from 'styled-components';

const Feedback = () => {

    return (
        <FeedbackStyled className='Feedback'>
            Feedback 
        </FeedbackStyled>
    );
}

export default Feedback;

const FeedbackStyled = styled.div`
   background-color: #f9c76b;
   padding: 20px;
   margin-bottom: 30px; 
`;