import React from "react";
import Navbar from "../../../components/Molecules/NavBar";
import Footer from "../../../components/Molecules/Footer";
import ContactUs from "../../../components/Molecules/ContactUs";
import ContactMode from "../../../components/Molecules/ContactMode";
import ProductDetails from "../../../components/Molecules/ProductDetails/index.js";
import YouMayLike from "../../../components/Molecules/YouMayLike/index.js";
import Grid from "../../../components/Atoms/Grid/index.js";
import { createClient as createClientD } from "contentful";

import {
  defaultEndpointProducts,
  defaultEndpointCart,
  authEndpoint,
  generateHexString,
} from "../../Property";
import { clientid, clientsecret, searchClient } from "../../Cred.js";
import { useRouter } from "next/router";
import useSWR from "swr";


const Product = ({  }) => {
  const router = useRouter();
  const { id } = router.query;
  const {data:accessToken}= useSWR("/api/getAuthToken")

  accessToken && console.log("accessToken &&",accessToken.access_token)
  accessToken && localStorage.setItem("accessToken", accessToken.access_token);
  const token= typeof window !== "undefined" ? localStorage.getItem("accessToken"):null

  const { data } = useSWR( `/api/getProductDetails?id=${id}&token=${token}`);
  const { data:productList } = useSWR( `/api/getProducts?id=${id}&token=${token}&limit=20`);


  return (
    <>
      <Navbar />
      {data && <ProductDetails value={data} productId={id} />}
      <Grid marginTop="2rem" marginBottom="2rem">
  { productList &&     <YouMayLike data={productList} />}
      </Grid>
      <ContactUs />

      <ContactMode />
      <Footer />
    </>
  );


let arraysize=[]
data && data.variants.map(item=>{

item.attributes.map(item2=>{

if (item2.name==="size")

arraysize.push(item2.value)

})

})

let arraycolor=[]
data && data.variants.map(item=>{

item.attributes.map(item2=>{

if (item2.name==="color")

arraycolor.push(item2.value)

})

})

 console.log("arraysize",arraysize)

    return ( <>
    
    
    <Navbar/>
{   data && <ProductDetails value={data} sizeArray={arraysize} colorArray={arraycolor}/>}
    <Grid marginTop="2rem" marginBottom="2rem">
    <YouMayLike data={productList}/>
    </Grid>
    <ContactUs/>
    
    <ContactMode/>
    <Footer/>
    </> );
}
 
export default Product;

