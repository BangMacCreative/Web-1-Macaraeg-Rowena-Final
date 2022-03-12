import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.jsx'
import SiteTitle from './SiteTitle.jsx'
const Header = () => {

    return (
        <HeaderStyled className='Header'>
            <div className="row">
                <Logo/>
                <SiteTitle/>
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #2d2620;
    padding: 20px 0px;
    display: flex;
    justify-content: left;
    
    .row {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        .Logo {
            padding-left: 30px;
            
        }
        .SiteTitle {
            display: flex;
            padding-right: 30px;
            
        }
    }
`;