import React from 'react';
import Grid, { Item } from '../../Atoms/Grid';

const Footer = () => {
    return (
<Grid columns={5} rows={1} >
<Item display="flex" paddingTop="5rem"   paddingBottom="5rem">
    <h4>Footer1</h4>
    <ul style={{  padding: 0,
    listStyleType: "none"}}>
    <li>
        content1
    </li>
    <li>
        content1
    </li>
    <li>
        content1
    </li>
    <li>
        content1
    </li>
    <li>
        content1
    </li>
    <li>
        content1
    </li>
</ul>
</Item>
<Item display="flex" paddingTop="5rem"   paddingBottom="5rem">
<h4>Footer1</h4>
<ul style={{  padding: 0,
    listStyleType: "none"}}>
    <li>
        content1
    </li>
    <li>
        content1
    </li>
    <li>
        content1
    </li>
    <li>
        content1
    </li>
    <li>
        content1
    </li>

</ul>
</Item>
<Item display="flex" paddingTop="5rem"   paddingBottom="5rem">
<h4>Footer1</h4>
<ul style={{  padding: 0,
    listStyleType: "none"}}>
    <li>
        content1
    </li>
    <li>
        content1
    </li>
    <li>
        content1
    </li>
    <li>
        content1
    </li>
</ul>
</Item>
</Grid>

      );
}
 
export default Footer ;