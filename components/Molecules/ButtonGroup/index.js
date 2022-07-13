import React, { Children } from 'react';
import { StyledButtonGroup } from './ButtonGroup.styled';

const ButtonGroup = ({children,...props}) => {
    return ( <>
    
    <StyledButtonGroup {...props}>
        {children}
    </StyledButtonGroup>
    
    </> );
}
 
export default ButtonGroup;