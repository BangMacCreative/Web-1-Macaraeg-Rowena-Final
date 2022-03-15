import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Homework from '../Homework/Homework.jsx';
import Welcome from '../Welcome/Welcome.jsx'; 
import Services from '../Services/Services.jsx'; 
import Gallery from 'React/Gallery/Gallery.jsx';
import Contact from '../Contact/Contact.jsx';
import Login from '../Login/Login.jsx';
import Video from 'React/Videos/video.jsx';  

const Main = () => {

    return (
         <MainStyled className='Main'>
             <div className='inset'>
                <Switch>
                    <Route path='/' exact>
                        <Welcome />
                    </Route>
                    <Route path='/services'>
                        <Services />
                    </Route>
                    <Route path='/gallery'>
                        <Gallery />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/video'>
                        <Video/>
                    </Route>
                    <Route path='/homework'>
                        <Homework />
                    </Route>
                </Switch>
            </div>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
   background-color: #e9e4d5;
`;