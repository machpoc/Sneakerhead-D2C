import React, { useEffect, useState } from 'react';
import Navbar from '../../../../components/Molecules/NavBar';
import Footer from '../../../../components/Molecules/Footer';
import ContactUs from '../../../../components/Molecules/ContactUs';
import ContactMode from '../../../../components/Molecules/ContactMode';
import VariantDetails from '../../../../components/Molecules/VariantDetails/index.js';
import YouMayLike from '../../../../components/Molecules/YouMayLike/index.js';
import Grid from '../../../../components/Atoms/Grid/index.js';
import { createClient as createClientD } from "contentful";

import {
    defaultEndpointProducts,
    defaultEndpointCart,
    authEndpoint,
    generateHexString 

  } from "../../../Property";
  import { clientid, clientsecret, searchClient } from "../../../Cred.js";
import { useRouter } from 'next/router';
import useSWR from 'swr';
  


const Product = () => {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const {id} = router.query
  var productId = router.query.id;
  const variantId = router.query.variant;

  console.log("id is",productId,"variant is",variantId)
  
  console.log("id",id)
  const {data:accessToken}= useSWR("/api/getAuthToken")

accessToken && console.log("accessToken &&",accessToken.access_token)
accessToken && localStorage.setItem("accessToken", accessToken.access_token);
  const token= typeof window !== "undefined" ? localStorage.getItem("accessToken"):null

  const { data } = useSWR( mounted ? `/api/getProductDetails?id=${productId}&token=${token}`:null,token);
  const { data:productList } = useSWR( `/api/getProducts?id=${id}&token=${token}&limit=20`);

  productList && console.log("productList",productList)
  useEffect(() => {
    setMounted(true)
  }, [])

  
  console.log("ssasasa",data)
  
  data && console.log("swr bsssss",data)

  console.log("arraysize")


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

arraycolor.push({value:item2.value,id:item.id})

console.log("arraycolor",arraycolor)

})

})

 console.log("arraysize",arraysize)

    return ( <>
    
    
    <Navbar/>
{   data && <VariantDetails productId={productId} value={data} sizeArray={arraysize} colorArray={arraycolor} variantId={variantId}/>}
    <Grid marginTop="2rem" marginBottom="2rem">
{    productList && <YouMayLike data={productList}/>}
    </Grid>
    <ContactUs/>
    
    <ContactMode/>
    <Footer/>
    </> );
}
 
export default Product;