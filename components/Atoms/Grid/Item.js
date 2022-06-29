import React from 'react'
import { StyledItemDiv } from './grid.styled';
const img = require('/public/images/nextjs-logo.png')


function Item({children,...props}){


    return(
        <StyledItemDiv {...props}>{children}</StyledItemDiv>


//         <div className={className} style={divStyle} >

// {children}
//         </div>
      
    )

}

export default Item