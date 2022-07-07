import React from 'react';
import ButtonComponent from '../../Atoms/Button/Button';
import Grid, { Item } from '../../Atoms/Grid';
const ContentBanner = () => {
    return (<>
    <Grid marginTop="25px" >
<Item>
<Grid column={3} rows={1} justifyContent="center" aligncontent="center" backgroundImage="images/refreshed/saveNature.jpg">

<Item display="flex">
<div style={{ color:'#ffffff', fontSize:"42px", fontWeight:"700",lineHeight:"57.2px",paddingTop:'156px'}}>TAKE CARE OF NATURE</div>
</Item>
<Item display="flex">
<div  style={{ color:'#ffffff', fontSize:"20px", fontWeight:"400",lineHeight:"27.24px",marginTop:"32px"}}>Start recycling today and help us improve our environment</div>

</Item>
<Item display="flex">
<div  style={{ color:'#ffffff', fontSize:"20px", fontWeight:"400",lineHeight:"27.24px",paddingBottom:'152px',marginTop:"32px"}}>
        <ButtonComponent fill="true" bg="#D31424">
                Click here
        </ButtonComponent>
</div>

</Item>
</Grid>
</Item>


    </Grid>
 
    
    </>  );
}
 
export default ContentBanner;