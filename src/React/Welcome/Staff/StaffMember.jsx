import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const StaffMember = ({member}) => {

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src = {member.image} alt={member.name}/>
            <h3>{member.name}</h3>
        </StaffMemberStyled>
    );
}

export default StaffMember
;

const StaffMemberStyled = styled.div`
    width: 45%;
    margin: 5px;

    @media ${defaultMediaQueries.mdUp} {
        width: 30%;
        margin: 15px;
    }

    @media ${defaultMediaQueries.lgUp} {
        width: 20%;
        margin: 20px;
    }

    img {
        width: 100%;
        display: block;
    }

    h3 {
        color: white;
        background-color: maroon;
        margin: 0px;
        padding: 5px 10px;
    }
    
`;