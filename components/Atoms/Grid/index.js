import React from 'react'
import Item from './Item';

const Grid=({children,bgColor,columns,rows,gap,backgroundImage,className,   paddingTop,  paddingBottom,marginTop,marginBottom})=>{

    const divStyle = {
   
        backgroundColor: `${bgColor}`,
        display:"grid",
        gap:  gap?`${gap}`:"auto",
        gridTemplateColumns:columns?`repeat(${columns},1fr)`:"auto",
        gridTemplateRows:rows?`repeat(${rows},1fr)`:"auto",
        backgroundImage:`url(${backgroundImage})`,
        // gridTemplate:`auto/repeat(auto-fit,minmax(40%,1fr))`,
       paddingTop:`${paddingTop}`,
       paddingBottom:`${paddingBottom}`,
       marginBottom:`${marginBottom}`,
       marginTop:`${marginTop}`


       

     
    };

return(


<div className={className} style={divStyle}>

{children}

</div>


)


}



export default Grid

export {Item}