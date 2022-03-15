import React from 'react';
import styled from 'styled-components';

const Content = ({ chosenTab }) => {

    return (
        <ContentStyled className='Content'>
        <div className="page">
            <img src={ chosenTab.image } alt={ chosenTab.title }/>
        
            <div className="story">
                <h3>{ chosenTab.title }</h3>
                <div dangerouslySetInnerHTML= { { __html:chosenTab.text }} />   
            </div>
            <div className="built">
                <img src= { chosenTab.install_1} alt={chosenTab.caption_1} /> 
                <p className="caption">{ chosenTab.caption_1 }</p>  
                <img src= { chosenTab.install_2} alt={chosenTab.caption_2} /> 
                <p className="caption">{ chosenTab.caption_2 }</p>
                <img src= { chosenTab.install_3} alt={chosenTab.caption_3} /> 
                <p className="caption">{ chosenTab.caption_3 }</p>  
            </div>
        </div>
        <div className='back-button'>
        <a href="/#">Back to Top</a>
        </div>
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.div`
    display: block;
    background-color: #e9e4d5;

    .page {    
        img {
            width: 100%
        }

        .caption {
            text-align: left;
        }
    
    }
    .story {
        margin: 10px;
    }

   .back-button{       
        text-align: center;
    }

`;