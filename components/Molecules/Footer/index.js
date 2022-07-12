import React from 'react';
import Grid, { Item } from '../../Atoms/Grid';
import {StyledHeader,StyledList} from './Footer.styled'
const Footer = () => {
    return (
<Grid columns={5} rows={1} justifyItems="center" bgColor="#C1C3C4" >
<Item paddingTop="1rem"   paddingBottom="5rem" >
   <StyledHeader>MY ACCOUNT</StyledHeader>
   <StyledList>
    <li>
        My Account
    </li>
    <li>
        Order History
    </li>
    <li>
        Wish lists
    </li>
    <li>
        content1
    </li>
   
</StyledList>
</Item>
<Item  paddingTop="1rem" paddingBottom="5rem">
    <StyledHeader>Policies</StyledHeader>
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
        Sitemap
    </li>
    <li>
        Blog
    </li>
</StyledList>
 
</Item>
<Item  paddingTop="1rem"    paddingBottom="5rem">
<StyledHeader>Track Order</StyledHeader>
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
        Sitemap
    </li>
    <li>
        Blog
    </li>
</StyledList>
</Item>
<Item  paddingTop="1rem"    paddingBottom="5rem">
<StyledHeader>Contact Us</StyledHeader>
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
        Sitemap
    </li>
    <li>
        Blog
    </li>
</StyledList>
</Item>
<Item  paddingTop="1rem"    paddingBottom="5rem">
<StyledHeader>Follow us</StyledHeader>
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
        Sitemap
    </li>
    <li>
        Blog
    </li>
</StyledList>
</Item>
</Grid>

      );
}
 
export default Footer ;