import { Box, Flex, Text } from "native-base";
import React from "react";
import Grid, { Item } from "../../Atoms/Grid";
import CartItem from "./cartItem";
import CartSummary from "./cartSummary";
const Cart = ({ data }) => {
  let length = data.lineItems.length;
  return (
    <Box
      // ml={58}
      // mr={58}
      maxWidth="1024px"
      alignItem="center"
      style={{ margin: "auto" }}
    >
      <Grid columns={12} gap="30px">
        <Item colStart={2} colEnd={8}>
          <Box
            height="48px"
            backgroundColor="#F0F1F1"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="#555553">
              You have added {data.lineItems[length - 1].name.en} to your cart.{" "}
            </Text>
          </Box>
          {data.lineItems.map((item) => {
            return <CartItem data={item} />;
          })}
        </Item>
        <Item colStart={8} colEnd={12}>
          <CartSummary data={data} />
        </Item>
      </Grid>
    </Box>
  );
};

export default Cart;
