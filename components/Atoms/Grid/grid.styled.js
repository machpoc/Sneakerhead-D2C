import React from 'react';


import styled, { css } from "styled-components";


    const StyledGridDiv = styled.div`

    
    background-color:${props=>props.bgColor};
    display:grid;
    gap:  ${props=>props.gap ? props.gap:"unset" };
    grid-template-columns:${props=>  props.columns ? `repeat(${props.columns},1fr)` : "auto"  };

    grid-template-rows:  ${props=>  props.rows ? `repeat(${props.rows},1fr)` : "auto"  };

    background-image:url(${props=>props.backgroundImage});

    padding-top:var(${props=>props.paddingTop});
    padding-bottom:var(${props=>props.paddingBottom});
    padding-left:var(${props=>props.paddingLeft});
    padding-right:var(${props=>props.paddingRight});

    margin-bottom:var(${props=>props.marginBottom});
    margin-top:var(${props=>props.marginTop});
    margin-left:var(${props=>props.marginLeft});
    margin-right:var(${props=>props.marginRight});

    justify-items:${props=>props.justifyItems};
    justify-content: ${props=>props.justifyContent};;
    align-content: ${props=>props.alignContent};;
    border-radius:${props=>props.borderRadius};
    border:${props=>props.border};
    margin:${props=>props.margin};
    position:relative;
    padding:${props=>props.padding};
    border-top:${props=>props.borderTop};
    
  background-size: cover;
  background-position: center center;
    `




const StyledItemDiv = styled.div`


grid-column-start: ${props=> props.colStart ? props.colStart : "auto"};
grid-column-end: ${props=> props.colEnd ? props.colEnd : "auto"};
  grid-row-start:  ${props=> props.rowStart ? props.rowStart : "auto"};
  grid-row-end:  ${props=> props.rowEnd ? props.rowEnd : "auto"};
  background-color:${props=>props.bgColor};
  display: ${props=>props.display};
${props=>props.display &&  `align-items: center;
  justify-content: center;`}
  flex-direction:column;
  
  padding-top:var(${props=>props.paddingTop});
  padding-bottom:var(${props=>props.paddingBottom});
  padding-left:var(${props=>props.paddingLeft});
  padding-right:var(${props=>props.paddingRight});

  position:${props=> props.position ? props.position : "unset"};
  margin:${props=>props.margin};
  z-index:${props=>props.zIndex};

  border-right:${props=>props.borderRight};
  border-top:${props=>props.borderTop};
  border:${props=>props.border};


  

`

export {StyledItemDiv,StyledGridDiv}
