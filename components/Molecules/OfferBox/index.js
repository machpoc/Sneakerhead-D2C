import React from 'react';
import Grid, { Item } from '../../Atoms/Grid';
import {StyledHeader,StyledContent} from './OfferBox.styled'
const OfferBox = ({header,content}) => {
    return (  <>
   {/* <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}> */}
   <Grid alignItems="center" margin="56px auto 56px auto"  >

    <Grid  border="1px solid #D31424" borderRadius='30px' alignItems="center" justifyContent="center" >
    <Item display="flex" colStart={1} colEnd={2}>
<StyledHeader>
    {header}
</StyledHeader>
        </Item>
        <Item display="flex" colStart={2} colEnd={8}>
        <StyledContent>
       {content}
</StyledContent>
        </Item>
    </Grid>
    
        
    </Grid>
   {/* </div> */}
    
    </>);
}
 
export default OfferBox;<>


</>