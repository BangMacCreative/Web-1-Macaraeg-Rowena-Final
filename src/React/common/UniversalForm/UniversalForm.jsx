import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Form from './Form.jsx';
import Feedback from './Feedback.jsx';

/* Exposed Components ---------------------------*/
export { default as Input} from './Controls/Input.jsx';
export { default as Textarea} from './Controls/Textarea.jsx';
export { default as SubmitButton} from './Controls/SubmitButton.jsx';

const UniversalForm = ({children}) => {

    return (
        <UniversalFormStyled className='UniversalForm'>
           <Feedback />
            <Form>
                { children }
            </Form>
        </UniversalFormStyled>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.div`
    max-width: 700px;
    margin: 50px auto;
    padding: 25px;
    box-shadow: 0px 0px 15px rgba(0,0,0,.1);
`;