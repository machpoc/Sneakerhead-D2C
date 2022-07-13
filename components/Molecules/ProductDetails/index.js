import React from 'react';
import { StyledSideImages } from '../../../pages/Products/[id]/Products.styled';
import ButtonComponent from '../../Atoms/Button/Button';
import Grid, { Item } from '../../Atoms/Grid';
import ButtonGroup from '../ButtonGroup';
import CheckPincode from '../CheckPincode';
import ProductList from '../productsList';
const ProductDetails = () => {
    return ( <>
    
    <Grid columns={12} rows={1} gap={30}>

        <Item colStart={2} colEnd={3}>
<Grid columns={1}>
{/* <Item display="flex">
    <StyledSideImages>
    <img height={31} width={45} src="/images/refreshed/productImage.png"/>
    </StyledSideImages>
   
    </Item> */}
  <Item>
        <div style={{ height:"60px", width:"31px"}}>
    <img height={31} width={45} src="/images/refreshed/productImage.png"/>

        </div>
    </Item>  <Item>
        <div style={{ height:"60px", width:"31px"}}>
    <img height={31} width={45} src="/images/refreshed/productImage.png"/>

        </div>
    </Item>  <Item>
        <div style={{ height:"60px", width:"31px"}}>
    <img height={31} width={45} src="/images/refreshed/productImage.png"/>

        </div>
    </Item>  <Item>
        <div style={{ height:"60px", width:"31px"}}>
    <img height={31} width={45} src="/images/refreshed/productImage.png"/>

        </div>
    </Item>  <Item>
        <div style={{ height:"60px", width:"31px"}}>
    <img height={31} width={45} src="/images/refreshed/productImage.png"/>

        </div>
    </Item>  <Item>
        <div style={{ height:"60px", width:"31px"}}>
    <img height={31} width={45} src="/images/refreshed/productImage.png"/>

        </div>
    </Item>  <Item>
        <div style={{ height:"60px", width:"31px"}}>
    <img height={31} width={45} src="/images/refreshed/productImage.png"/>

        </div>
    </Item>
        
</Grid>
        </Item>

        <Item colStart={3} colEnd={7}>

<img src="/images/refreshed/productImage.png"/>
</Item>
<Item colStart={8} colEnd={11}>
<h1>Puma Zoom vapor Cage 4 Rafa</h1>

<p>Men's Hard Court Tennis Shoes</p>

<h1>$599</h1>
<p>(Inclusive of all taxes)</p>
<p>Color</p>

<div style={{background: "lightblue", borderRadius: "50%", width: "20px", height: "20px",display:"inline-block",margin:"0px 4px 0px 0px"}}></div>
<div style={{background: "red", borderRadius: "50%", width: "20px", height: "20px",display:"inline-block",margin:"0px 0px 0px 4px"}}></div>

<>
<p>Size</p>
<Grid columns={3} gap={10} >
<Item margin="9px 0px 9px 0px">
    <span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK 6</span>
</Item><Item margin="9px 0px 9px 0px">
<span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK 6</span>

</Item><Item margin="9px 0px 9px 0px">
<span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK 6</span>

</Item>      
<Item margin="9px 0px 9px 0px">
<span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK 6</span>

</Item><Item margin="9px 0px 9px 0px">
<span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK 6</span>

</Item><Item margin="9px 0px 9px 0px">
<span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK 6</span>

</Item><Item margin="9px 0px 9px 0px">
<span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK 6</span>

</Item>
<Item margin="9px 0px 9px 0px">
<span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK 6</span>

</Item>
<Item margin="9px 0px 9px 0px">
<span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK 6</span>

</Item>
<Item margin="9px 0px 9px 0px">
<span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK 6</span>

</Item>
<Item margin="9px 0px 9px 0px">
<span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK 6</span>

</Item>

</Grid>


</>

<>
{/* QTY
<ButtonGroup height="30px" width="124px">
    <ButtonComponent height="100%" width="33.33%">abc</ButtonComponent>
    <ButtonComponent height="100%" width="33.33%">abc</ButtonComponent>
    <ButtonComponent height="100%" width="33.33%">abc</ButtonComponent>
</ButtonGroup> */}
</>

<CheckPincode/>

</Item>



    </Grid>
    
    
    
    </> );
}
 
export default ProductDetails;