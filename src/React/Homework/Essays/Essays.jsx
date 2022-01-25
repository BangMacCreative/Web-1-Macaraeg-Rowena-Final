import React from 'react';
import styled from 'styled-components';
import Essay from './Essay.jsx';


const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays </h2>
            <Essay q='S2. What is the difference between Git, Github, and Heroku?'>
                This is my answer
                This is my answer
                This is my answer
            </Essay>
            <Essay q='S3. Explain the difference between HTML, CSS, and JS.'>
                something else
            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)?How do they differ from multi-page websites'>
                yet another
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
background-color: white;
padding: 20px;
`;