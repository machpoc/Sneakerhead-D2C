import styled from "styled-components"



const StyledButtonGroup=styled.div`

height:${props=>props.height};
width:${props=>props.width};
display:flex;
flex-direction:row;

&:after {
    content: "";
    clear: both;
    display: table;
  }

  &:not(:last-child) {
    border-right: none; /* Prevent double borders */
  }

  &:hover {
    background-color: #3e8e41;
  }

`

export {StyledButtonGroup}