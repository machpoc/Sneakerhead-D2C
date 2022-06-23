import React, { Component } from 'react';
import Grid, { Item } from '../components/Atoms/Grid';
import MarketingComponent from '../components/Molecules/MarketingComponent';

import BannerCardComponent from "../components/Molecules/BannerCard";
import Carousal from '../components/Molecules/Carousal';
import HeroBanner from "../components/Molecules/HeroBanner";
import Product from '../components/Molecules/Product';



const Sample = () => {

const prodNo=[]

for(let i=0;i<20;i++){

    prodNo.push(i)
}


    return ( <>
    
    <BannerCardComponent

heading="This is a headding"
description="Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard"
buttonName="Click here"

/>





<HeroBanner bgColor="#E9EEF1" rows={1} columns={2}>

    <Item>
        <BannerCardComponent

heading="This is a headding"
description="Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard"
buttonName="Click here"

/></Item>
    <Item><BannerCardComponent

heading="This is a headding"
description="Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard"
buttonName="Click here"

/></Item>


</HeroBanner>

<Grid columns={5}>
{prodNo.map(prod=>{

return(
<Product

productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
productName="Liberty"
productDescription="LL SUN RX 02"
productPrice="$594"
marginBottom="2rem"

/>
)

})}
</Grid>



<Carousal/>
    

    <MarketingComponent heading="This is a headding"
description="Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard"
buttonName="Click heres"
/>
    
    </> );
}
 
export default Sample;