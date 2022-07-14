import { Box, Text } from "native-base";
import React from "react";
import Grid, { Item } from "../components/Atoms/Grid";
import CheckoutNavbar from "../components/Molecules/CheckoutNavbar";
import ShippingAddressComponent from "../components/Molecules/ShippingAddress";

const ShippingAddress = () => {
  return (
    <Box>
      <CheckoutNavbar />
      <Grid columns={12} gap="30px">
        <Item colStart={4} colEnd={9}>
          <ShippingAddressComponent />
        </Item>
      </Grid>
    </Box>
  );
};

export default ShippingAddress;
