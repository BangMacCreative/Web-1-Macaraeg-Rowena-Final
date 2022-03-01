import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm, { Input, Textarea, SubmitButton } from 'React/common/UniversalForm/UniversalForm.jsx';

const Contact = () => {

    const onSubmitHandler = ({fields, payload}) => {
        console.log('onSubmit fields, payload', fields, payload);
    }
    
    return (
        <ContactStyled className='Contact'>
            <h1>Contact </h1>
            <UniversalForm
                apiUrl='/email/send'
                onSubmit={ onSubmitHandler }
            >
                <Input
                    label = 'Name'
                    id='name'
                    placeholder='Your Name'
                    rules={ ['required'] }
                />
                <Input
                    label = 'Email'
                    id='email'
                    placeholder='username@email.com'
                    rules={ ['required', 'email'] }
                />
                <Textarea
                    label='Message'
                    id='message'
                    placeholder='I was wondering about...'
                    rules={ ['required'] }
                    />
                <SubmitButton> Send Email </SubmitButton>
            </UniversalForm>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;