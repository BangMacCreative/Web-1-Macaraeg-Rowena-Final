import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Header from './Layout/Header/Header.jsx';
import Nav from './Layout/Nav/Nav.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';

const App = () => {

    return (
        <BrowserRouter>
            <AppStyled className='App'>
        
                <Header/>
                <Nav/>
                <Main/>
                <Footer/>
            </AppStyled>
        </BrowserRouter>
    );
}

export default App;

const AppStyled = styled.div`

`;