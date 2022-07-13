import styled from "styled-components";


const StyledDiv = styled.div`

width: 300px;
height:40px;
position: relative;
margin-top:2rem;
margin-bottom:2rem;



`

const StyledInput = styled.input`

border: 2px solid #eeeeee;
height: 40px;
width: 200px;
border-radius: 7px;


`
const StyledButton = styled.button`

height: 40px;
position: absolute;
border: 2px solid rgb(219, 39, 39);
width: 100px;
border: none;
color: white;
background-color: rgb(219, 39, 39);
border-radius: 0em .5em .5em 0em;
right: 4px;
font-size: 12px;


`

export {StyledButton,StyledInput,StyledDiv}