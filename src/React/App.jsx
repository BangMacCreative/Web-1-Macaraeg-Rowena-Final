import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Header from './Layout/Header.jsx';
import Nav from './Layout/Nav/Nav.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';

const App = () => {

    return (
        <BrowserRouter>
        <AppStyled className='App'>
            App 
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
    border: solid 10px purple;
    padding: 20px;
    max-width:800px;
    margin: auto;

div{
    border:solid 1px teal;
    padding 20px
}
    
`;