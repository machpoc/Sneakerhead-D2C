import React from 'react';
import Grid, { Item } from '../../Atoms/Grid';
import {StyledOffer,StyledContent} from './contactMode.styled'
const ContactMode = () => {
    return (  <>
   {/* <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}> */}
   <Grid alignItems="center" margin="29px auto 29px auto"  >

    <Grid  border="1px solid #D31424" borderRadius='30px' alignItems="center" justifyContent="center" >
    <Item display="flex" colStart={1} colEnd={2}>
<StyledOffer>
OFFERS
</StyledOffer>
    

        </Item>
        <Item display="flex" colStart={2} colEnd={8}>
       <StyledContent>
       FREE SHIPPING ON PREPAID ORDERS ABOVE 599
       </StyledContent>
           
        </Item>
    </Grid>
    
        
    </Grid>
   {/* </div> */}
    
    </>);
}
 
export default ContactMode;