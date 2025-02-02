import { Box, Text } from "native-base";
import { useRouter } from "next/router";
import React from "react";
import Grid, { Item } from "../../Atoms/Grid";
import { signIn } from "next-auth/react";
import { withTheme } from "styled-components";
const LoginComponent = ({}) => {
  const router = useRouter();
  return (
    <Grid columns={12} gap="30px">
      <Item colStart={5} colEnd={9}>
        <Box mb="8px" justifyContent="center" alignItems="center">
          <Text color="black" fontSize="12px" lineHeight="16px">
            -Shop without creating an account-
          </Text>
        </Box>
        <button
          style={{
            marginRight: 20,
            marginBottom: 16,
            cursor: "pointer",
            justifyContent: "end",
            alignContent: "end",
            alignItems: "end",
            opacity: 1,
            backgroundColor: `var(--sneakerhead-red)`,
            width: "100%",
            height: "48px",
            borderRadius: 50,
            border: "0px",
            color: "var(--sneakerhead-white)",
          }}
          onClick={() => {
            router.push("/Checkout/ShippingAddress");
          }}
        >
          <Text color={"var(--sneakerhead-white)"}>Guest Checkout</Text>
        </button>
        <button
          style={{
            marginRight: 20,
            marginBottom: 16,
            cursor: "pointer",
            justifyContent: "end",
            alignContent: "end",
            alignItems: "end",
            opacity: 1,
            backgroundColor: "var(--sneakerhead-white)",
            border: `1px solid var(--sneakerhead-red)`,
            width: "100%",
            height: "48px",

            borderRadius: 50,

            color: `var(--sneakerhead-red)`,
          }}
          // onClick={() => {
          //   router.push("/Checkout/ShippingAddress");
          // }}
        >
          <Text color={`var(--sneakerhead-red)`}>Become a Member</Text>
        </button>
        <Box alignItems="center" justifyContent="center">
          <button
            onClick={() => {
              signIn("google", {
                redirect: true,
                callbackUrl: "/Checkout/ShippingAddress/",
              });
            }}
            style={{
              border: `1px solid var(--sneakerhead-red)`,
              marginRight: 20,
              cursor: "pointer",
              justifyContent: "end",
              alignContent: "end",
              alignItems: "end",
              opacity: 1,
              backgroundColor: "var(--sneakerhead-white)",
              width: "82px",
              height: "48px",
              marginBottom: 16,
              borderRadius: 30,

              color: `var(--sneakerhead-red)`,
            }}
            // onClick={() => {
            //   router.push("/Checkout/Payment");
            // }}
          >
            <Text color={`var(--sneakerhead-red)`}>Login</Text>
          </button>
        </Box>
      </Item>
    </Grid>
  );
};

export default withTheme(LoginComponent);
