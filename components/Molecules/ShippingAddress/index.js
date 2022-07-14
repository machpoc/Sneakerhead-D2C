import { Box, Input } from "native-base";
import React from "react";

const InputComponent = ({ placeholder }) => {
  return (
    <Input
      height="48px"
      backgroundColor="#F0F1F1"
      borderRadius="10px"
      placeholder={placeholder}
      maxWidth="471px"
      mb="16px"
      borderColor="#F0F1F1"
    />
  );
};
const ShippingAddressComponent = () => {
  return (
    <Box>
      <InputComponent placeholder="Email Address*" />
      <InputComponent placeholder="First Name*" />
      <InputComponent placeholder="Last Name*" />
      <InputComponent placeholder="Street Address*" />
      <InputComponent placeholder="City*" />
      <InputComponent placeholder="Zip/Postal Code*" />
      <InputComponent placeholder="Phone Number*" />
    </Box>
  );
};

export default ShippingAddressComponent;
