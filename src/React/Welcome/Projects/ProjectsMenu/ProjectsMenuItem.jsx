import React from 'react';
import styled from 'styled-components';

const ProjectsMenuItem = ({ item, chosenPage, chosenPageUpdate}) => {
    
    const clickHandler = () => {
        chosenPageUpdate(item);
        }

        const theClassName = (item.title === chosenPage.title) ? 'ProjectsMenuItem selected':'ProjectsMenuItem';
    return (
        <ProjectsMenuItemStyled className={ theClassName } onClick= { clickHandler }>
        { item.title }
        </ProjectsMenuItemStyled>
    );
}

export default ProjectsMenuItem;

const ProjectsMenuItemStyled = styled.div`
    background-color: #423e3a;
    color: #e9e4d5;
    width: 150px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px 5px 0px 0px;
    line-height: 40px;
    margin-right: 5px;

    &.selected {
        background-color: #666164;
        color: white;
    }    
`;