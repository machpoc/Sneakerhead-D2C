import React from 'react';
import Grid, { Item } from '../../Atoms/Grid';

const OfferBox = () => {
    return (  <>
   {/* <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}> */}
   <Grid alignItems="center" margin="56px auto 56px auto"  >

    <Grid  border="1px solid #D31424" borderRadius='30px' alignItems="center" justifyContent="center" >
    <Item display="flex" colStart={1} colEnd={2}>
<div style={{padding:"26px 115px 26px 115px",fontSize:'30px',fontWeight:'700',lineHeight:'37.2px'}}>
    OFFERS
</div>
        </Item>
        <Item display="flex" colStart={2} colEnd={8}>
        <div style={{padding:"26px 115px 26px 115px",fontSize:'20px',fontWeight:'400',lineHeight:'24.8px'}}>
        

        FREE SHIPPING ON PREPAID ORDERS ABOVE 599
</div>

   
        </Item>
    </Grid>
    
        
    </Grid>
   {/* </div> */}
    
    </>);
}
 
export default OfferBox;<>


</>