import React, { useState }  from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { pageData } from './pageData.js';

/* Components ---------------------------*/
import ProjectsMenu from './ProjectsMenu/ProjectsMenu.jsx'
import ProjectPage from './ProjectPage.jsx'

const Projects = () => {

    const [chosenPage, chosenPageUpdate] = useState(pageData[0]);
    
    return (
        <ProjectsStyled className='Projects'>
            <ProjectsMenu chosenPage={ chosenPage } chosenPagebUpdate={ chosenPageUpdate} pageData={ pageData }/>
            <ProjectPage chosenPage={ chosenPage } />
        </ProjectsStyled>
    );
}

export default Projects;

const ProjectsStyled = styled.div`
    
`;