import React from 'react';
import styled from 'styled-components';

import Header from './Layout/Header.jsx';
import Nav from './Layout/Nav.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';

const App = () => {

    return (
        <AppStyled className='App'>
            App 
            <Header/>
            <Nav/>
            <Main/>
            <Footer/>
        </AppStyled>
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