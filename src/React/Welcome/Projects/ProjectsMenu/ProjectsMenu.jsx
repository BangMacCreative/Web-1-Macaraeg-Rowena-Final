import React from 'react';
import styled from 'styled-components';

import ProjectsMenuItem from './ProjectsMenuItem.jsx';

const ProjectsMenu = ({ chosenPage, chosenPageUpdate, pageData }) => {

    return (
        <ProjectsMenuStyled className='ProjectsMenu'>
            {
                pageData.map((item, idx) => {
                    return <ProjectsMenuItem
                            key={ idx }
                            item={ item }
                            chosenPage={ chosenPage }
                            chosenPageUpdate={ chosenPageUpdate}
                            />
                })

            }
        </ProjectsMenuStyled>
    );
}

export default ProjectsMenu;

const ProjectsMenuStyled = styled.div`
    display: flex;  
`;