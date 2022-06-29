import React from 'react';


import styled, { css } from "styled-components";


    const StyledGridDiv = styled.div`

    
    background-color:${props=>props.bgColor};
    display:grid;
    gap:  ${props=>props.gap ? props.gap:"unset" };
    grid-template-columns:${props=>  props.columns ? `repeat(${props.columns},1fr)` : "auto"  };

    grid-template-rows:  ${props=>  props.rows ? `repeat(${props.rows},1fr)` : "auto"  };

    background-image:url(${props=>props.backgroundImage});
    padding-top:${props=>props.paddingTop};
    padding-bottom:${props=>props.paddingBottom};
    margin-bottom:${props=>props.marginBottom};
    margin-top:${props=>props.marginTop};
    justify-items:${props=>props.justifyItems};

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
  padding-top:${props=>props.paddingTop};
  padding-bottom:${props=>props.paddingBottom};
  position:${props=> props.position ? props.position : "unset"};
  margin:${props=>props.margin};
//   borderRadius:"15px"
  

`

export {StyledItemDiv,StyledGridDiv}
