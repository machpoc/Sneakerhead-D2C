import React from 'react'
const img = require('/public/images/nextjs-logo.png')


function Item({children,colStart,colEnd,rowStart,rowEnd,bgColor,backgroundImage,position,className,display,paddingTop,  paddingBottom}){

    const divStyle = {
        
gridColumnStart: colStart? `${colStart}`:"auto",
gridColumnEnd:colEnd?`${colEnd}`:"auto",
  gridRowStart: rowStart?`${rowStart}`:"auto",
  gridRowEnd:rowEnd?`${rowEnd}`:"auto",
  backgroundColor:`${bgColor}`,
  

  display: `${display}`,
  alignItems: "center",
  justifyContent: "center",
  flexDirection:"column",
  paddingTop:`${paddingTop}`,
  paddingBottom:`${paddingBottom}`,
  position:position?`${position}`:"unset",
//   borderRadius:"15px"

  
    };

    return(
        <div className={className} style={divStyle} >

{children}
        </div>
      
    )

}

export default Item