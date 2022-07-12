import React, { Children } from 'react';
import StyledSubHeader from './SubHeader.styled';
const SubHeader = ({children,...props}) => {
    return (<>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <StyledSubHeader {...props }>
{children}
    </StyledSubHeader>
    </div>

    
    
    </>  );
}
 
export default SubHeader;