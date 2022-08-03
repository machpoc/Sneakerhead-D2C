import React from "react";
import Navbar from "../components/Molecules/NavBar";
import Footer from "../components/Molecules/Footer";
import ContactUs from "../components/Molecules/ContactUs";
import ContactMode from "../components/Molecules/ContactMode";
import YouMayLike from "../components/Molecules/YouMayLike/index.js";
import Grid from "../components/Atoms/Grid/index.js";
import Cart from "../components/Molecules/Cart/index.js";
import Item from "../components/Atoms/Grid/Item";
import {
  defaultEndpointProducts,
  defaultEndpointCart,
  authEndpoint,
} from "./Property";
import { clientid, clientsecret, searchClient } from "./Cred.js";
import useSWR from "swr";
import { Text } from "native-base";

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

  const resProduct = await fetch(defaultEndpointProducts, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + clientToken,
    },
  });

  const productList = await resProduct.json();

  return {
    props: {
      productList,
    },
  };
}

const cart = ({ productList }) => {
  const cartid =
    typeof window !== "undefined" ? localStorage.getItem("cartid") : null;
  // let cartdata = null;
  // if (cartid) {
    const token= typeof window !== "undefined" ? localStorage.getItem("accessToken"):null

  const { data: cartdata } = useSWR(`/api/getcartData?cartid=${cartid}&token=${token}`);

  return (
    <>
      <Navbar />
      {/* <Cart />
       */}
      {cartdata ? (
        <Cart data={cartdata} />
      ) : (
        <Grid columns={12} gap="30px">
          <Item colStart={2} colEnd={8}>
            <Text>No Items</Text>
          </Item>
          <Item colStart={8} colEnd={12}>
            <Text>No Items</Text>
          </Item>
        </Grid>
      )}
      {/* <ProductDetails value={data} /> */}
      <Grid marginTop="2rem" marginBottom="2rem">
     { productList && <YouMayLike data={productList.results} />}
      </Grid>
      <ContactUs />

      <ContactMode />
      <Footer />
    </>
  );
};

export default cart;
