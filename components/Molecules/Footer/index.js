import React from 'react';
import Grid, { Item } from '../../Atoms/Grid';
import {StyledHeader,StyledList} from './Footer.styled'
const Footer = () => {
    return (
<Grid columns={5} rows={1} justifyItems="center" bgColor="#C1C3C4" >
<Item paddingTop="1rem"   paddingBottom="5rem" >
   <StyledHeader>Sneakerhead</StyledHeader>
   <StyledList>
    <li>
    About Us
    </li>
    <li>
    Careers
    </li>
    <li>
    News & Events
    </li>
    <li>
    Blog
    </li>
   
</StyledList>
</Item>
<Item  paddingTop="1rem" paddingBottom="5rem">
    <StyledHeader>My account</StyledHeader>
<StyledList>
<li>
My account
    </li>
    <li>
    Order history
    </li>
</StyledList>
 
</Item>
<Item  paddingTop="1rem"    paddingBottom="5rem">
<StyledHeader>Policies</StyledHeader>
<StyledList>
<li>
Returns And Exchanges
    </li>
    <li>
    Payment Terms
    </li>
    <li>
    Delivery Terms 
    </li>
    <li>
    Store Credit Program
    </li>
    <li>
    Terms Of Use 
    </li>    <li>
    Privacy Policy 
    </li>    <li>
    Security Policy
    </li>
</StyledList>
</Item>
<Item  paddingTop="1rem"    paddingBottom="5rem">
<StyledHeader>Customer service</StyledHeader>
<StyledList>
<li>
FAQS 
    </li>
    <li>
    Contact Us 
    </li>
    <li>
    Track Order
    </li>
    <li>
    Return Request
    </li>
    <li>
    Return Status
    </li>
</StyledList>
</Item>
<Item  paddingTop="1rem"    paddingBottom="5rem">
<StyledHeader>Follow us</StyledHeader>
<StyledList>
<li>
      INSTAGRAM
    </li>
    <li>
        FACEBOOK
    </li>
    
</StyledList>
</Item>
</Grid>

      );
}
 
export default Footer ;