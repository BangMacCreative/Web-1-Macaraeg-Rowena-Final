import React from 'react';
import styled from 'styled-components';

const Content = ({ chosenTab }) => {

    return (
        <ContentStyled className='Content'>
        <div className="hero">
            <img src={ chosenTab.image } alt={ chosenTab.title }/>
        </div>
        <div className="story">
            <h3>{ chosenTab.title }</h3>
            <div dangerouslySetInnerHTML= { { __html:chosenTab.text }} />   
        </div>
        <div classname="built">
            <img src= { chosenTab.install_1} alt={chosenTab.caption_1} /> 
            <p>{ chosenTab.caption_1 }</p>  
            <img src= { chosenTab.install_2} alt={chosenTab.caption_2} /> 
            <p>{ chosenTab.caption_2 }</p>  
        </div>
       
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.div`
    display: block;
    background-color: #696566;
    padding: 20px;

    .hero {
        img {
            width: 100%
        }

    }
    .story {
        margin: 10px;
    }
    .built{
        img{
            width: 100%
        }
        display: block;
    

    }
    
`;