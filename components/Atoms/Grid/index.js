import React from 'react'
import Item from './Item';

import {StyledGridDiv} from './grid.styled'


const Grid=({children, ...props})=>{



return(

    <StyledGridDiv { ...props} >
{children}
    </StyledGridDiv>


)


}



export default Grid

export {Item}