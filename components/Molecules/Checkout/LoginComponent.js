import { Box, Text } from "native-base";
import { useRouter } from "next/router";
import React from "react";
import Grid, { Item } from "../../Atoms/Grid";
import { signIn } from "next-auth/react";
const LoginComponent = () => {
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
            backgroundColor: "#D31424",
            width: "100%",
            height: "48px",

            borderRadius: 50,
            border: "0px",
            color: "white",
          }}
          onClick={() => {
            router.push("/Checkout/ShippingAddress");
          }}
        >
          <Text>Guest Checkout</Text>
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
            backgroundColor: "white",
            border: "1px solid #D31424",
            width: "100%",
            height: "48px",

            borderRadius: 50,

            color: "#D31424",
          }}
          // onClick={() => {
          //   router.push("/Checkout/ShippingAddress");
          // }}
        >
          <Text color="#D31424">Become a Member</Text>
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
              border: "1px solid #D31424",
              marginRight: 20,
              cursor: "pointer",
              justifyContent: "end",
              alignContent: "end",
              alignItems: "end",
              opacity: 1,
              backgroundColor: "white",
              width: "82px",
              height: "48px",
              marginBottom: 16,
              borderRadius: 30,

              color: "#D31424",
            }}
            // onClick={() => {
            //   router.push("/Checkout/Payment");
            // }}
          >
            <Text color="#D31424">Login</Text>
          </button>
        </Box>
      </Item>
    </Grid>
  );
};

export default LoginComponent;
