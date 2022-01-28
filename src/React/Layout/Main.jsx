import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Homework from '../Homework/Homework.jsx';
import Welcome from '../Welcome/Welcome.jsx'; 
import Services from '../Services/Services.jsx'; 
import Contact from '../Contact/Contact.jsx';
import Login from '../Login/Login.jsx';  

const Main = () => {

    return (
         <MainStyled className='Main'>
            <Switch>
                <Route path='/'exact>
                    <Welcome />
                </Route>
    
                <Route path='/services'>
                    <Services />
                </Route>

                <Route path='/contact'>
                    <Contact />
                </Route>

                <Route path='/login'>
                    <Login />
                </Route>

                <Route path='/homework'>
                    <Homework />
                </Route>
            </Switch>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    
`;