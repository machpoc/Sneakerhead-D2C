import React from 'react';
import { withTheme } from 'styled-components';
import Grid, { Item } from '../../Atoms/Grid';
import {StyledHeader,StyledContent,StyledSeperator} from './OfferBox.styled'
const OfferBox = ({header,content}) => {
    return (  <>
   {/* <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}> */}
   <Grid alignItems="center" marginTop="--size-sneakerhead-700" marginRight="--size-sneakerhead-auto" marginBottom="--size-sneakerhead-700" marginLeft="--size-sneakerhead-auto">

    <Grid  border = {`1px solid var(--sneakerhead-red)`} borderRadius='30px' alignItems="center" justifyContent="center" >
    <Item display="flex" colStart={1} colEnd={2}>
<StyledHeader>
    {header}
</StyledHeader>
        </Item>
        <Item display="flex" colStart={2} colEnd={3}>
        <StyledSeperator>
      <div style={{background:`var(--sneakerhead-red)`,padding:"12px 2px 12px 2px", borderRadius:"30px"}}>

      </div>
</StyledSeperator>
        </Item>
        <Item display="flex" colStart={3} colEnd={9}>
        <StyledContent>
       {content}
</StyledContent>
        </Item>
    </Grid>
    
        
    </Grid>
   {/* </div> */}
    
    </>);
}
 
export default withTheme(OfferBox);