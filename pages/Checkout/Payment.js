import { Box, Button, Text } from "native-base";
import React, { useState } from "react";
import Grid, { Item } from "../../components/Atoms/Grid";
import CheckoutNavbar from "../../components/Molecules/CheckoutNavbar";
import CardPayment from "../../components/Molecules/Payment/CardPayment";

const PaymentOptions = ({ value, option, setpaymentMethod }) => {
  return (
    <Button
      onPress={() => {
        setpaymentMethod(value);
      }}
      justifyContent="center"
      alignItem="center"
      alignContent="center"
      backgroundColor="white"
      borderRadius="10px"
      maxWidth="471px"
      height="48px"
      mb="16px"
      style={{ border: "1px solid #000000" }}
    >
      <Text m="16px" fontSize="12px" lineHeight="16px" color="black">
        {option}
      </Text>
    </Button>
  );
};
const Payment = () => {
  const [paymentmethod, setpaymentMethod] = useState("");
  if (paymentmethod === "") console.log("lol");
  return (
    <Box>
      <CheckoutNavbar page="payment" />
      {paymentmethod === "" ? (
        <>
          {" "}
          <Box width="1024px" style={{ margin: "auto" }}>
            <Box
              mt="48px"
              mb="48px"
              alignItems="center"
              justifyContent="center"
            >
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
                <PaymentOptions
                  value="cards"
                  option="Credit/Debit cards"
                  setpaymentMethod={setpaymentMethod}
                />
                <PaymentOptions
                  value="others"
                  option="Net banking/Wallets/UPI/Others"
                  setpaymentMethod={setpaymentMethod}
                />
                <PaymentOptions
                  value="cod"
                  option=" Cash on delivery"
                  setpaymentMethod={setpaymentMethod}
                />
              </Item>
            </Grid>
          </Box>
        </>
      ) : (
        ""
      )}
      {paymentmethod === "cards" ? <CardPayment /> : ""}
    </Box>
  );
};

export default Payment;
