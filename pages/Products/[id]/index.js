import React from 'react';
import Navbar from '../../../components/Molecules/NavBar';
import Footer from '../../../components/Molecules/Footer';
import ContactUs from '../../../components/Molecules/ContactUs';
import ContactMode from '../../../components/Molecules/ContactMode';
import ProductDetails from '../../../components/Molecules/ProductDetails/index.js';
import YouMayLike from '../../../components/Molecules/YouMayLike/index.js';
import Grid from '../../../components/Atoms/Grid/index.js';
import { createClient as createClientD } from "contentful";

import {
    defaultEndpointProducts,
    defaultEndpointCart,
    authEndpoint,
    generateHexString 

  } from "../../Property";
  import { clientid, clientsecret, searchClient } from "../../Cred.js";
  

export async function getServerSideProps({ query }) {
    const auth_res = await fetch(authEndpoint, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(clientid + ":" + clientsecret).toString("base64"),
      },
    });
  
    let res_auth = await auth_res.json();
  
    const clientToken = res_auth.access_token;
    let valVal = generateHexString(14);
  let title = "sadasfdasd" + valVal;

  const client = createClientD({
    space: "27dvrilv9g9m",
    accessToken: "7eR1gkrfTTlkiHY0BP-gqdqB3RBm_z6E6EB1xYljiQo",
  });
 
    let contentful_res = await client.getEntries({ content_type: "review" });
  
    const { id } = query;
    const res = await fetch(`${defaultEndpointProducts}/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + clientToken,
      },
    });
  
    const data = await res.json();

    const resProduct = await fetch(defaultEndpointProducts, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + clientToken,
        },
      });
    
      const productList = await resProduct.json();
  
  
  
  var raw = "";
  
  var requestOptions = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + clientToken,
    },
    redirect: 'follow'
  };
  
  let customergrouplist = await fetch("https://api.us-central1.gcp.commercetools.com/onlinestore-poc/customer-groups", requestOptions)
    .then(response => response.text())
    .then(result => {return JSON.parse(result)})
    .catch(error => console.log('error', error));
  
    console.log(customergrouplist)
  let sellers = {}
    customergrouplist.results.map((customer)=>{
      if(customer.custom.fields.customertype==="seller"){
        sellers[customer.id] = customer.name
      }
    })
  
  
    var raw = "";
    
    var requestOptions = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + clientToken,
      },
  
      redirect: 'follow'
    };
    
    let offerslist =  await fetch("https://api.us-central1.gcp.commercetools.com/onlinestore-poc/custom-objects/offers", requestOptions)
      .then(response => response.text())
      .then(result => { return JSON.parse(result)})
      .catch(error => console.log('error', error));
  
   
    // if (data.masterData.staged.variants.length > 1) {
    
    //   data.masterData.staged.variants.map(async (variant, index) => {
    //     if(index!=0){
  
    //     console.log("cusotomerid",variant.prices[0].customerGroup.id)
       
    //       // let sellername = await getCustomerGroupName(data.masterData.staged.variants[index].prices[0].customerGroup.id);
    //       // console.log(sellername)
    //     } })
    // }
  
    return {
      props: {
        data,
        contentful_res,sellers,offerslist,productList
      },
    };
  }

const Product = ({data,productList}) => {
    return ( <>
    
    
    <Navbar/>
    <ProductDetails value={data}/>
    <Grid marginTop="2rem" marginBottom="2rem">
    <YouMayLike data={productList}/>
    </Grid>
    <ContactUs/>
    
    <ContactMode/>
    <Footer/>
    </> );
}
 
export default Product;