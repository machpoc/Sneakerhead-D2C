import { Box, Text } from "native-base";
import React from "react";
import useSWR from "swr";
import Grid, { Item } from "../../components/Atoms/Grid";
import CheckoutSummary from "../../components/Molecules/Checkout/CheckoutSummary";
import LoginComponent from "../../components/Molecules/Checkout/LoginComponent";
import CheckoutNavbar from "../../components/Molecules/CheckoutNavbar";
import { signOut, useSession } from "next-auth/react";

const Checkout = () => {
  const { data: session } = useSession();
  console.log("usersession", session);

  const cartid =
    typeof window !== "undefined" ? localStorage.getItem("cartid") : null;
  // let cartdata = null;
  // if (cartid) {
  const { data: cartdata } = useSWR(`/api/getcartData?cartid=${cartid}`);

  return (
    <Box>
      <CheckoutNavbar page="login" />
      <Box
        style={{ margin: "auto" }}
        width="1024px"
        // justifyContent="center"
        // alignItems="center"
      >
        <Box mt="64px" mb="56px">
          <LoginComponent />
        </Box>
      </Box>

      <Box backgroundColor="#F0F1F1">
        <Box style={{ margin: "auto" }} width="1024px">
          {cartdata ? <CheckoutSummary cartdata={cartdata} /> : ""}
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
