import React from 'react';
import styled from 'styled-components';

const ProjectPage = ({ chosenPage }) => {

    return (
        <ProjectPageStyled className='ProjectPage'>
         <div className="left">
            <img src={ chosenPage.image } alt={ chosenPage.title }/>
        </div>
        <div className="right">
            <h3>{ chosenPage.title }</h3>
            <div dangerouslySetInnerHTML= { { __html:chosenPage.description }} />   
        </div>
        </ProjectPageStyled>
    );
}

export default ProjectPage;

const ProjectPageStyled = styled.div`
    display: flex;
    padding: 20px;
    background-color: #696566;

    .left {
        flex: 5;
        img {
                width: 100%
        }

    }
    .right {
        flex: 3;
        margin-left: 20px;
    }
`;