import React from "react";
// import { StyledSideImages } from '../../../pages/Products/[id]/Products.styled';
import ButtonComponent from "../../Atoms/Button/Button";
import Grid, { Item } from "../../Atoms/Grid";
import ButtonGroup from "../ButtonGroup";
import CheckPincode from "../CheckPincode";
import ProductList from "../productsList";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";


import { authEndpoint1, defaultEndpointCart } from "../../../pages/Property";
import { clientid, clientsecret } from "../../../pages/Cred";
import { withTheme } from "styled-components";


async function BuyNow(prodid) {
  const auth_res = await fetch(authEndpoint1, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(clientid + ":" + clientsecret).toString("base64"),
    },
  });
  let cartid = localStorage.getItem("cartid");

  let cartversion = localStorage.getItem("cartversion");

  let res_auth = await auth_res.json();
  const clientToken = res_auth.access_token;
  const res = await fetch(`${defaultEndpointCart}/${cartid}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + clientToken,
    },
    body: JSON.stringify({
      version: parseInt(cartversion),

      actions: [
        {
          action: "addLineItem",
          productId: prodid,
          variantId: 1,
          quantity: 1,
          supplyChannel: {
            typeId: "channel",
            //channel id from commercetool
            id: "a386fdda-6583-4748-b650-ef11c9ad031f",
          },
          distributionChannel: {
            typeId: "channel",
            id: "a386fdda-6583-4748-b650-ef11c9ad031f",
          },
        },
      ],
    }),
  });
  const data = await res.json();

  if (data) {
    localStorage.setItem("cartversion", data.version);
  }
  return data;
}


const ProductDetails = ({sizeArray,colorArray,productId, theme:{colors}, ...props}) => {
const router = useRouter()
    let value = props.value;
    // console.log("teh data from commerce",props.value)
    return ( <>
    <Grid columns={12} rows={1} gap={30}>

        <Item colStart={2} colEnd={3}>
          <Grid columns={1}>
            {/* <Item display="flex">
    <StyledSideImages>
    <img height={31} width={45}src={value.masterVariant.images[0].url}/>
    </StyledSideImages>
   
    </Item> */}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>
          </Grid>
        </Item>

        <Item colStart={3} colEnd={7} margin="10% 0 0 0">
          <img src={value.masterVariant.images[0].url} />
        </Item>
        <Item colStart={8} colEnd={11}>
          <h1>{value.name.en}</h1>

          <p>{value.description.en}</p>

          <h1>${value.masterVariant.prices[0].value.centAmount}</h1>
          <p>(Inclusive of all taxes)</p>



{value.variants !=false ?<>

{colorArray.map(color=>{
    return(
<div style={{    border: "0.5px dashed",background: `${color}`, borderRadius: "50%", width: "20px", height: "20px",display:"inline-block",margin:"0px 4px 0px 0px"}}></div>

    )
})}

</>:<>
<div style={{ border: "0.5px dashed",background:` ${value.masterVariant.attributes[0].value}`, borderRadius: "50%", width: "20px", height: "20px",display:"inline-block",margin:"0px 4px 0px 0px"}}></div>
<div style={{ border: "0.5px dashed",background: ` ${value.masterVariant.attributes[1].value}`, borderRadius: "50%", width: "20px", height: "20px",display:"inline-block",margin:"0px 0px 0px 4px"}}></div>

</>}



<>
<p>Size</p>
<Grid columns={3} gap={10} >

    { value.variants !=false ? sizeArray.map(size=>{

        return(
            <Item margin="9px 0px 9px 0px">
            <span style={{background: `${colors.light}`, border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK {size}</span>
        </Item>
        
        )

    }):
    <Item margin="9px 0px 9px 0px">
    <span style={{background: `${colors.light}`, border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> FREE</span>
</Item>
    }

</Grid>


</>

<>
{/* QTY
<ButtonGroup height="30px" width="124px">
    <ButtonComponent height="100%" width="33.33%">abc</ButtonComponent>
    <ButtonComponent height="100%" width="33.33%">abc</ButtonComponent>
    <ButtonComponent height="100%" width="33.33%">abc</ButtonComponent>
</ButtonGroup> */}
          </>


<ButtonComponent  onPress={async () => {
              let data = await BuyNow(productId);
              if (data) {
                router.push("/cart");
              }
            }}   fill={true} bg ="#db2727" hoverBg="#db2727"  marginBottom="5%"  marginTop="10%">ADD TO CART</ButtonComponent>

<ButtonComponent onPress={async () => {
              let data = await BuyNow(productId);
              if (data) {
                router.push("/cart");
              }
            }}  >BUY NOW</ButtonComponent>
<CheckPincode/>
<p style={{"fontFamily":"'Open Sans'","fontStyle":"normal","fontWeight":"400","fontSize":"12px","lineHeight":"16px"}}> ={">"} 5% additional OFF on Prepaid orders<br/>
  ={'>'} Mfg.By- Bata India Limited<br/>
 ={'>'} Mkd./Cust Care:- Bata House, 418/02, Sector 17, Gurgaon Mehrauli Road, Gurgaon, Haryana 122002 </p>

 <p  style={{"fontFamily":"'Open Sans'","fontStyle":"normal","fontWeight":"400","fontSize":"16px","lineHeight":"22px","color":"#000000",textDecoration: "underline"}}>View product details</p>


</Item>

</Grid>


</> );
}
 
export default withTheme(ProductDetails);