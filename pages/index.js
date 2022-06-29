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
import Wave from '../components/Atoms/wave';
const img = require('/public/images/Adidas-Shoes-Free-PNG-Image.png')

const sample2 = () => {

const {data:heroBannerData}= useSWR("/api/getHeroBanner")
const {data:heroBannerData2}= useSWR("/api/getHeroBanner2")
const {data:marketingTile}= useSWR("/api/getMarketingTile")
const {data:marketingBanner}= useSWR("/api/getMarketingBanner")
const {data:productData}= useSWR("/api/getProducts")



console.log("data is",process.env.CONTENTFUL_TOKEN)

   
console.log(productData)


    return ( <>

    <Navbar/>
{ heroBannerData && 

<HeroBanner columns={2} marginBottom="-8rem"  >

<Item  paddingTop="5rem"   paddingBottom="5rem"   >
<BannerCardComponent 

heading={heroBannerData[0].heroTitle}
description={heroBannerData[0].heroDescription}
buttonName="Grab Now"
buttonBg="#D31424"
hoverBg="#D31421"

/>
</Item>
<Item display="flex">
   <img width={350} src="images/Adidas-Shoes-Free-PNG-Image.png"/>

</Item>


 </HeroBanner>}
 <Wave/>


{ heroBannerData2 && <HeroBanner    bgColor="#B390DF"  columns={2}>

<Item    paddingBottom="5rem">
<BannerCardComponent 

heading={heroBannerData2[0].heroTitle}
description={heroBannerData2[0].heroDescription}
buttonName="Click here"
buttonBg="#D31424"
hoverBg="#D31421"

/>
</Item>
<Item display="flex" position="relative">
<img width={500}  style={{"position":"absolute","right":"0",bottom:0,"height":"100%"}}   src="images/hero2.png" />


</Item>


 </HeroBanner>}

    
 {/* <Carousal/> */}

<Grid  paddingTop="4rem">
<Test/>
</Grid>



{marketingTile && <Grid columns={2} rows={1} bgColor="#E9EEF1" marginTop="4rem" marginBottom="4rem">
<Item paddingBottom="2rem" paddingTop="2rem" >
<MarketingComponent heading={marketingTile[0].title1}
description={marketingTile[0].description1}
buttonName="Click heres"
/>
</Item>
<Item paddingBottom="2rem" paddingTop="2rem">
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
MEN'S COLLECTIONS
        </ButtonComponent>
    </Item>
    <Item colStart={3} colEnd={4}>
        <ButtonComponent hoverBg="#D31421" bg="#D31424" fill={false} >
WOMEN'S COLLECTIONS
        </ButtonComponent>
    </Item>

</Grid>
    
    <Grid>

    </Grid>

 { marketingBanner && <> <HeroBanner columns={2}  >
 <Item display="flex" bgColor="#F87994">
   <img width={350} src="images/banner2.png"/>

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
<Item  bgColor="#B390DF" display="flex" position = 'relative'>
   <img width={250}   src="images/Adidas-Shoes-Free-PNG-Image.png" />

</Item>


 </HeroBanner>
 <HeroBanner columns={2}  >
 <Item  bgColor="#01D1D3" display="flex" position = 'relative'>
  <img style={{"position":"absolute","bottom":"0","height":"74%","width":"auto"}} width={250} src="images/banner3.png"/>
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

 <Grid paddingTop="4rem" paddingBottom="4rem">
<Test/>
</Grid>




<Grid columns={3} rows={1}  bgColor="#E9EEF1" paddingBottom="4rem" justifyItems="center" >

   <Item paddingTop="2rem" >
   <MarketingFooter

productImage="images/footer1.jpg"
productName="What to wear in  winter"
productDescription="Sustainable fashion is an increasingly used concept these days as we have become even more aware of the impact it has on the environment. Hence, Metro Shoes"

// marginRight="1rem"
// marginLeft="1rem"

/>
   </Item>
   <Item paddingTop="2rem">
   <MarketingFooter
 
productImage="images/footer2.jpg"

productName="See most wishlisted shoe collections"
productDescription="Your leather shoes, belts, and coats are stylish and exquisite, but they must have taken a toll on your wallet"

// marginRight="1rem"
// marginLeft="1rem"

/>
      </Item>
      <Item paddingTop="2rem">
      <MarketingFooter
productImage="images/footer3.jpg"
productName="See what's experts talk about the perfect Footware's"
productDescription="The shoes of any groom are very muc underestimated and will be the last thing on your mind when Hence, Metro Shoes"

// marginRight="1rem"
// marginLeft="1rem"

/>
      </Item>
 
</Grid>

<Footer/>
 
    </> );
}
 
export default sample2;