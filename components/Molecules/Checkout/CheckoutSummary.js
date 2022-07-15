import { Box, Flex, Text } from "native-base";
import React from "react";
import Grid, { Item } from "../../Atoms/Grid";
import CartItem from "../Cart/cartItem";
import CartSummary from "../Cart/cartSummary";

const CheckoutSummary = ({ cartdata }) => {
  cartdata && console.log(cartdata);
  return (
    <Box mt="18px" mb="61px">
      <Grid columns={12} gap="30px">
        <Item colStart={3} colEnd={11}>
          <Box alignItems="center" justifyContent="center">
            <Text
              color="black"
              fontWeight="bold"
              fontSize="24px"
              lineHeight="33px"
            >
              Summary
            </Text>
          </Box>
        </Item>

        <Item colStart={3} colEnd={11}>
          {cartdata.lineItems.map((item) => {
            return <CartItem data={item} divider="false" />;
          })}
        </Item>

        <Item colStart={3} colEnd={11}>
          <CartSummary data={cartdata} button="false" />
        </Item>
        <Item colStart={3} colEnd={11}>
          <Flex direction="row" justifyContent="space-between">
            <button
              style={{
                marginRight: 20,
                cursor: "pointer",
                justifyContent: "end",
                alignContent: "end",
                alignItems: "end",
                opacity: 1,
                backgroundColor: "#D31424",
                width: "130px",
                height: "48px",

                borderRadius: 50,
                border: "0px",
                color: "white",
              }}
              onClick={() => {
                router.push("/cart");
              }}
            >
              <Text>Modify Cart</Text>
            </button>
            <Text color="black">*prices are inclusive of all taxes</Text>
          </Flex>
        </Item>
      </Grid>
    </Box>
  );
};
export default CheckoutSummary;