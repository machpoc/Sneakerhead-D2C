import { Box, Divider, Flex, Text } from "native-base";
import { useRouter } from "next/dist/client/router";
import React from "react";
import ButtonGroup from "../ButtonGroup";

const CartSummary = ({ data, button }) => {
  const router = useRouter();
  return (
    <Box m="5px">
      <Text
        mb="8px"
        color="black"
        fontSize="24px"
        lineHeight="33px"
        fontWeight="bold"
      >
        Summary
      </Text>
      <Flex mb="8px" direction="row" justifyContent="space-between">
        <Text
          pb="4px"
          pr="16px"
          fontSize="16px"
          lineHeight="22px"
          color="#555553"
        >
          Subtotal
        </Text>
        <Text pb="4px" fontSize="16px" lineHeight="22px" color="#555553">
          ${data.totalPrice.centAmount}
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
          Estimated delivery & handling
        </Text>
        <Text pb="4px" fontSize="16px" lineHeight="22px" color="#555553">
          $00
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
          Total
        </Text>
        <Text
          pb="4px"
          fontSize="16px"
          lineHeight="22px"
          color="black"
          fontWeight="bold"
        >
          ${data.totalPrice.centAmount}
        </Text>
      </Flex>
      <Divider style={{ border: "1px solid #C1C3C4" }} mb="8px" />
      {button === "true" ? (
        <Box mt="8px" ml="10%" mr="10%">
          <button
            onClick={() => {
              router.push("/Checkout");
            }}
            style={{
              cursor: "pointer",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              opacity: 1,
              backgroundColor: "#D31424",
              width: "100%",
              height: "48px",

              borderRadius: 50,
              border: "0px",
              color: "white",
            }}
          >
            <Text>Guest Checkout</Text>
          </button>
        </Box>
      ) : (
        ""
      )}
      {button === "true" ? (
        <Box mt="8px" ml="10%" mr="10%">
          <button
            style={{
              cursor: "pointer",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              opacity: 1,
              backgroundColor: "#D31424",
              width: "100%",
              height: "48px",

              borderRadius: 50,
              border: "0px",
              color: "white",
            }}
          >
            <Text>Member Checkout</Text>
          </button>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};
export default CartSummary;
