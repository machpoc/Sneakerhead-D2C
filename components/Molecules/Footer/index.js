import React from 'react';
import Grid, { Item } from '../../Atoms/Grid';

const Footer = () => {
    return (
<Grid columns={5} rows={1} justifyItems="center" bgColor="#C1C3C4" >
<Item paddingTop="1rem"   paddingBottom="5rem" >
    <h5>MY ACCOUNT</h5>
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
<h5>SNEAKERHEAD</h5>
<ul style={{  padding: 0,
    listStyleType: "none"}}>
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
<h5>CUSTOMER SERVICE</h5>
<ul style={{  padding: 0,
    listStyleType: "none"}}>
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