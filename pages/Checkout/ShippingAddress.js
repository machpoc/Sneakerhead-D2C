import { Box, Text } from "native-base";
import React from "react";
import Grid, { Item } from "../../components/Atoms/Grid";
import CheckoutNavbar from "../../components/Molecules/CheckoutNavbar";
import ShippingAddressComponent from "../../components/Molecules/ShippingAddress";

const ShippingAddress = () => {
  return (
    <Box>
      <CheckoutNavbar page="shipping" />
      <Box width="1024px" style={{ margin: "auto" }}>
        <Box mt="48px" mb="48px" alignItems="center" justifyContent="center">
          <Text
            color="black"
            fontSize="24px"
            lineHeight="33px"
            fontWeight="bold"
          >
            Shipping Address
          </Text>
        </Box>
        <Grid columns={12} gap="30px">
          <Item colStart={4} colEnd={10}>
            <ShippingAddressComponent />
          </Item>
        </Grid>
      </Box>
    </Box>
  );
};

export default ShippingAddress;
