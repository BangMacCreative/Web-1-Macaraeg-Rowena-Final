import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Video = () => {

    return (
        <div className='Frame'><VideoStyled>
           <ReactPlayer url='https://www.youtube.com/watch?v=cTmE8plRCiM'/>
        </VideoStyled>
        </div>
    );
}

export default Video;

const VideoStyled = styled.div`

`;