import { useRouter } from 'next/router';
import React from 'react';
import Grid, { Item } from '../../components/Atoms/Grid';
import ContactMode from '../../components/Molecules/ContactMode';
import ContactUs from '../../components/Molecules/ContactUs';
import Footer from '../../components/Molecules/Footer';
import Navbar from '../../components/Molecules/NavBar';
import {Flex,Text,Divider } from 'native-base'
import { clientid, clientsecret } from '../Cred';
import { authEndpoint, defaultEndpointProducts } from '../Property';

import useSWR from 'swr'
import { withTheme } from 'styled-components';


const OrederDetails = ({theme:{colors}}) => {


const router= useRouter()
const orderId= router.query.payment_intent

const token= typeof window !== "undefined" ? localStorage.getItem("accessToken"):null


const {data:orderData} = useSWR(`/api/getOrderDetails?orderId=${orderId}&token=${token}`)

orderData && console.log(orderData)

    return ( <>
    <Navbar/>
   { orderData && <>
    <Grid columns={12} border="1px solid #C1C3C4" padding="1rem 0 1rem 0">
    <Item colStart={3} colEnd={5}>
        <div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "24px", lineHeight: "33px"}}>Order ID</div>
{    orderId &&    <div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "20px", lineHeight: "33px"}}>{orderId.slice(3,-1)}</div>}
    </Item>
    <Item colStart={11} colEnd={13}>

    <div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "24px", lineHeight: "33px"}}>Placed on</div>
{    orderId &&    <div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "20px", lineHeight: "33px"}}>Friday, 6 June</div>}
 
    </Item>
</Grid>
<Grid columns={12}>
    <Item  colStart={3} colEnd={5} margin="1rem 0 1rem 0">
        <span style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "30px", lineHeight: "41px"}}>Shipment 1 of 1</span>
    </Item>
</Grid>

<Grid columns={12}>
<Item  colStart={3} colEnd={12} >
<div  style={{background: "#B390DF", borderRadius: "10px 10px 0px 0px",width: "904px", height: "55px", left: "60px", top: "494px",display: "flex", alignItems: "center", justifyContent: "center"}}>
<div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "24px", lineHeight: "33px", color: `${colors.light}`}}>
Order in progress
    </div>
    </div>
    <div  style={{ width: "906px", height: "144px", left: "59px" ,display: "flex", alignItems: "center", justifyContent: "center",flexDirection:"column"}}>
<div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "24px", lineHeight: "33px"}}>
Standard delivery
    </div>

    <div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "24px", lineHeight: "33px"}}>
2-3 days
    </div>
    </div>

    <div  style={{ background: "#E2E2E2", width: "906px", height: "144px", left: "59px" ,display: "flex", alignItems: "center", justifyContent: "center",flexDirection:"column"}}>
<div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "24px", lineHeight: "33px"}}>
<span style={{paddingRight:"10px"}}><img  src="\images\refreshed\invoice.svg"/></span>Your invoice is prepared. Order will be shipped shortly
    </div>

    </div>

{orderData.lineItems.map(item=>{
    return(
        <Grid columns={12} marginTop="2rem">
        <Item colStart={1} colEnd={5}>
        <img height={200} width={300} src={item.variant.images[0].url}/>
        </Item>
        <Item colStart={6} colEnd={12}>
        <div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "30px", lineHeight: "41px",paddingBottom:"10px"}}>{item.name.en}</div>
        <div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "20px", lineHeight: "27px", color: "#555553",paddingBottom:"10px"}}>Men's Hard Court Tennis Shoes</div>
        <div style={{paddingBottom:"10px"}}>{item.variant.attributes[0].name} : {item.variant.attributes[0].value}</div>
        
        <div>{item.variant.attributes[1].name} : {item.variant.attributes[1].value} Quantity  1</div>
        
        
        
        </Item>
        
            </Grid>
    )
})}

    
    <Grid columns={12}  >
    <Item colStart={1} colEnd={3} >
<div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "24px", lineHeight: "33px"}}>Shipment Total</div>
<div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "24px", lineHeight: "33px",}}>${orderData.totalPrice.centAmount}</div>
    </Item>
    <Item colStart={10} colEnd={13}>
<div>View details</div>

</Item>
</Grid>
<div style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "30px", lineHeight: "41px",marginTop:"2rem"}}>Bill Summary</div>
<Grid columns={12} marginTop="2rem">
<Item colStart={1} colEnd={12}>
<Flex mb="8px" direction="row" justifyContent="space-between">
        <Text
          pb="4px"
          pr="16px"
          fontSize="16px"
          lineHeight="22px"
          color="#555553"
        >
          Cart Value
        </Text>
        <Text pb="4px" fontSize="16px" lineHeight="22px" color="#555553">
        ${orderData.totalPrice.centAmount}
        </Text>
      </Flex>
      <Flex mb="8px" direction="row" justifyContent="space-between">
        <Text
          pb="4px"
          pr="16px"
          fontSize="16px"
          lineHeight="22px"
          color="#555553"
        >
         Delivery Charges
        </Text>
        <Text pb="4px" fontSize="16px" lineHeight="22px" color="#555553">
          $0
        </Text>
      </Flex>
      <Divider style={{ border: "1px solid #C1C3C4" }} mb="8px" />
      <Flex mb="8px" direction="row" justifyContent="space-between">
        <Text
          pb="4px"
          pr="16px"
          fontSize="16px"
          lineHeight="22px"
          color="black"
          fontWeight="bold"
        >
          Order Total
        </Text>
        <Text
          pb="4px"
          fontSize="16px"
          lineHeight="22px"
          color="black"
          fontWeight="bold"
        >
      ${orderData.totalPrice.centAmount}
        </Text>
      </Flex>
    </Item>
    </Grid>


</Item>
</Grid>
    </>}

    <ContactUs/>
    <ContactMode/>
    <Footer/>
    </> );
}
 
export default withTheme(OrederDetails);