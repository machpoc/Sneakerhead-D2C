import styled from "styled-components";

const StyledHeader = styled.div`
color:${props=>props.theme.colors.light};
font-size:42px;
 font-weight:700;
 line-height:57.2px;
 padding-top:156px;

`

const StyledContent = styled.div`

color:${props=>props.theme.colors.light};
 font-size:20px;
  font-weight:400;
  line-height:27.24px;
  margin-top:32px;
`

const StyledButton = styled.div`

color:${props=>props.theme.colors.light};
 font-size:20px;
  font-weight:400;
  line-height:27.24px;
  padding-bottom:152px;
  margin-top:32px;
`

export {StyledHeader,StyledContent,StyledButton}