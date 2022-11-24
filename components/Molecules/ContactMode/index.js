import React from 'react';
import { withTheme } from 'styled-components';
import Grid, { Item } from '../../Atoms/Grid';
import {StyledOffer,StyledContent} from './contactMode.styled'
const ContactMode = ({}) => {
    return (  <>
   {/* <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}> */}
   <Grid alignItems="center" marginTop="--size-sneakerhead-600" marginRight="--size-sneakerhead-auto" marginBottom="--size-sneakerhead-600" marginLeft="--size-sneakerhead-auto" >

    <Grid  border={`1px solid var(--sneakerhead-red)`} borderRadius='30px' alignItems="center" justifyContent="center" >
    <Item display="flex" colStart={1} colEnd={2}>
<StyledOffer>

<span style={{paddingRight:"10px"}}><img src="\images\refreshed\call.svg"/></span>
Phone: +91 333333333
</StyledOffer>
    

        </Item>
        <Item display="flex" colStart={2} colEnd={8}>
       <StyledContent>
       <span style={{paddingRight:"10px"}}><img style={{marginBottom:"4px"}} src="\images\refreshed\email.svg"/></span>
       email: abc@gmail.com       </StyledContent>
           
        </Item>
    </Grid>
    
        
    </Grid>
   {/* </div> */}
    
    </>);
}
 
export default withTheme(ContactMode);