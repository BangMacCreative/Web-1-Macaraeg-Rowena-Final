import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm, { Input, Textarea, SubmitButton } from 'React/common/UniversalForm/UniversalForm.jsx';

const Contact = () => {
    
    return (
        <ContactStyled className='Contact'>
            <h1>Contact </h1>
            <UniversalForm>
                <Input
                    label = 'Name'
                    id='name'
                    placeholder='I was wondering about...'
                />
                <Textarea
                    label='Message'
                    id='message'
                    placeholder='I was wondering about...'
                    />
                <SubmitButton> Send Email </SubmitButton>
            </UniversalForm>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;