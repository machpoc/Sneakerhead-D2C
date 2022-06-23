import React, { Component } from 'react';
import useSWR from "swr"
import Grid, { Item } from "../components/Atoms/Grid";
import BannerCardComponent from "../components/Molecules/BannerCard";
import HeroBanner from "../components/Molecules/HeroBanner";
import Image from '../components/Atoms/Image';
import Carousal from '../components/Molecules/Carousal';
import MarketingComponent from '../components/Molecules/MarketingComponent';
import { Button, Center } from 'native-base';
import ButtonComponent from '../components/Atoms/Button/Button';
import Navbar from '../components/Molecules/BannerCard/NavBar.js/index.js';
import Navbar2 from '../components/Molecules/Navbar2';
import Footer from '../components/Molecules/Footer';
import MarketingFooter from '../components/Molecules/BannerCard/MarketingFooter';
import { ProgressViewIOSComponent } from 'react-native';
import Test from '../components/Molecules/Test/Test';
const img = require('/public/images/Adidas-Shoes-Free-PNG-Image.png')

const sample2 = () => {

const {data:heroBannerData}= useSWR("/api/getHeroBanner")
const {data:heroBannerData2}= useSWR("/api/getHeroBanner2")
const {data:marketingTile}= useSWR("/api/getMarketingTile")
const {data:marketingBanner}= useSWR("/api/getMarketingBanner")
// const {data:productData}= useSWR("/api/getProductData")





   
console.log("dd")


    return ( <>

    <Navbar/>
{ heroBannerData && 

<HeroBanner columns={2}  >

<Item bgColor="#E9EEF1" paddingTop="5rem"   paddingBottom="5rem"   >
<BannerCardComponent 

heading={heroBannerData[0].heroTitle}
description={heroBannerData[0].heroDescription}
buttonName="Click here"
buttonBg="#D31424"
hoverBg="#D31421"

/>
</Item>
<Item display="flex">
   <img width={250} src="images/Adidas-Shoes-Free-PNG-Image.png"/>

</Item>


 </HeroBanner>}

{ heroBannerData2 && <HeroBanner marginBottom="4rem"   bgColor="#B390DF"  columns={2}>

<Item paddingTop="5rem"   paddingBottom="5rem">
<BannerCardComponent 

heading={heroBannerData2[0].heroTitle}
description={heroBannerData2[0].heroDescription}
buttonName="Click here"
buttonBg="#D31424"
hoverBg="#D31421"

/>
</Item>
<Item display="flex">
   <img width={250} src="images/Adidas-Shoes-Free-PNG-Image.png"/>

</Item>


 </HeroBanner>}
    
 {/* <Carousal/> */}
 <Test/>

{marketingTile && <Grid columns={2} rows={1} bgColor="#E9EEF1" marginTop="4rem" marginBottom="4rem">
<Item paddingBottom="2rem" paddingTop="2rem" >
<MarketingComponent heading={marketingTile[0].title1}
description={marketingTile[0].description1}
buttonName="Click heres"
/>
</Item>
<Item paddingBottom="2rem" paddingTop="1rem">
<MarketingComponent  heading={marketingTile[0].title2}
description={marketingTile[0].description1}
buttonName="Click heres"
/>
</Item>
</Grid>}
{/* <Carousal/> */}

<Grid columns={4} gap="2rem" marginBottom="3rem">
    <Item colStart={2} colEnd={3}>

        <ButtonComponent hoverBg="#D31421" bg="#D31424" fill={false}  >
Click me
        </ButtonComponent>
    </Item>
    <Item colStart={3} colEnd={4}>
        <ButtonComponent hoverBg="#D31421" bg="#D31424" fill={false} >
Click me
        </ButtonComponent>
    </Item>

</Grid>
    
    <Grid>

    </Grid>

 { marketingBanner && <> <HeroBanner columns={2}  >
 <Item display="flex" bgColor="#F87994">
   <img width={250} src="images/image1.png"/>

</Item>

<Item bgColor="#E9EEF1" paddingTop="5rem"   paddingBottom="5rem"   >
<BannerCardComponent 

heading={marketingBanner[0].title1}
description={marketingBanner[0].description1}
buttonName="Click here"
buttonBg="#D31424"
hoverBg="#D31421"

/>
</Item>


 </HeroBanner>
    <HeroBanner columns={2}  >

<Item paddingTop="5rem"   paddingBottom="5rem"   >
<BannerCardComponent 

heading={marketingBanner[0].title2}
description={marketingBanner[0].description2}
buttonName="Click here"
buttonBg="#D31424"
hoverBg="#D31421"

/>
</Item>
<Item  bgColor="#B390DF" display="flex">
   <img width={250} src="images/image2.png"/>

</Item>


 </HeroBanner>
 <HeroBanner columns={2}  >
 <Item  bgColor="#01D1D3" display="flex" position = 'relative'>
  <img style={{"position":"absolute","top":"0","right":"0","height":"74%","width":"auto"}} width={250} src="images/image3.png"/>
</Item>

<Item  paddingTop="5rem"   paddingBottom="5rem"   >
<BannerCardComponent 

heading={marketingBanner[0].title3}
description={marketingBanner[0].description3}
buttonName="Click here"
buttonBg="#D31424"
hoverBg="#D31421"

/>
</Item>


 </HeroBanner></>}

 <Test/>



<Grid columns={3} rows={1}  bgColor="#E9EEF1" paddingTop="4rem" paddingBottom="4rem" >

   <Item display="flex">
   <MarketingFooter

productImage="images/Adidas-Shoes-Free-PNG-Image.png"
productName="Puma"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/>
   </Item>
   <Item  display="flex">
   <MarketingFooter

productImage="images/Adidas-Shoes-Free-PNG-Image.png"
productName="Puma"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/>
      </Item>
      <Item  display="flex">
      <MarketingFooter

productImage="images/Adidas-Shoes-Free-PNG-Image.png"
productName="Puma"
productDescription="LL SUN RX 02"
productPrice="$594"
marginRight="1rem"
marginLeft="1rem"

/>
      </Item>
 
</Grid>

<Footer/>
 
    </> );
}
 
export default sample2;