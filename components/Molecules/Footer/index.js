import React from 'react';
import Grid, { Item } from '../../Atoms/Grid';

const Footer = () => {
    return (
<Grid columns={5} rows={1} justifyItems="center" bgColor="#C1C3C4" >
<Item paddingTop="1rem"   paddingBottom="5rem" >
    <span style={{fontWeight:"600"}}>MY ACCOUNT</span>
    <ul style={{  padding: 0,
    listStyleType: "none"}}>
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
   
</ul>
</Item>
<Item  paddingTop="1rem" paddingBottom="5rem">
<span style={{fontWeight:"600"}}>Policies</span>
<ul style={{  padding: 0,
    listStyleType: "none",fontWeight:'12px',lineHeight:'34.58px',fontWeight:'400'}}>
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

</ul>
</Item>
<Item  paddingTop="1rem"    paddingBottom="5rem">
<span style={{fontWeight:"600"}}>MY ACCOUNT</span>
<ul style={{  padding: 0,
    listStyleType: "none",fontWeight:'12px',lineHeight:'34.58px',fontWeight:'400'}}>
    <li>
    FAQS
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
</ul>
</Item>
<Item  paddingTop="1rem"    paddingBottom="5rem">
<span style={{fontWeight:"600"}}>Customer service</span>
<ul style={{  padding: 0,
    listStyleType: "none",fontWeight:'12px',lineHeight:'34.58px',fontWeight:'400'}}>
    <li>
    FAQS
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
</ul>
</Item>
<Item  paddingTop="1rem"    paddingBottom="5rem">
<span style={{fontWeight:"600"}}>Follow us</span>
<ul style={{  padding: 0,
    listStyleType: "none",fontWeight:'12px',lineHeight:'34.58px',fontWeight:'400'}}>
    <li>
    FAQS
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
</ul>
</Item>
</Grid>

      );
}
 
export default Footer ;