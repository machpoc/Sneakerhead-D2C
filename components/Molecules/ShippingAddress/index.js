import { Box, Input, Text } from "native-base";
import { useRouter } from "next/router";
import React from "react";

const InputComponent = ({ placeholder }) => {
  return (
    <Input
      color="black"
      fontWeight="bold"
      fontSize="12px"
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
  const router = useRouter();
  return (
    <Box>
      <Box>
        <InputComponent placeholder="Email Address*" />
        <InputComponent placeholder="First Name*" />
        <InputComponent placeholder="Last Name*" />
        <InputComponent placeholder="Street Address*" />
        <InputComponent placeholder="City*" />
        <select
          style={{
            height: "48px",
            backgroundColor: "#F0F1F1",
            borderRadius: "10px",
            maxWidth: "471px",
            marginBottom: "16px",
            borderColor: "#F0F1F1",
          }}
        >
          <option style={{ margin: "16px" }}>
            Please select a region, state or province
          </option>
          <option>Karnataka</option>
          <option>Karnataka</option>
          <option>Karnataka</option>
        </select>
        <InputComponent placeholder="Zip/Postal Code*" />
        <InputComponent placeholder="Phone Number*" />
        <Box width="100%" alignItems="end">
          <button
            style={{
              marginRight: 20,
              cursor: "pointer",
              justifyContent: "end",
              alignContent: "end",
              alignItems: "end",
              opacity: 1,
              backgroundColor: "#D31424",
              width: "82px",
              height: "48px",

              borderRadius: 50,
              border: "0px",
              color: "white",
            }}
            onClick={() => {
              router.push("/Checkout/Payment");
            }}
          >
            <Text>Next</Text>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default ShippingAddressComponent;
