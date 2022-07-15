import { Box, Text } from "native-base";
import React from "react";
import CheckoutNavbar from "../../components/Molecules/CheckoutNavbar";
import { TiTickOutline } from "react-icons/ti";
import Grid, { Item } from "../../components/Atoms/Grid";

export async function getServerSideProps(context) {
  const paymentIntent = context.query.payment_intent;

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Basic c2tfdGVzdF81MUxFQXRXSmdjRTJQbWVqR0FUbWYwbnQ5b0dHMGpqTUpMYnV0Tk5NcTRwRUJZRnl2S2hSdG85emV6ZUhzNnFBUXBIeG00R3RGMGlOdG1mVlNQS1d0Rnc3WjAwUmV0OERmalA6"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let paymentdata = await fetch(
    "https://api.stripe.com/v1/payment_intents/pi_3LLj0TJgcE2PmejG1BHNrTng",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result);
    })
    .catch((error) => console.log("error", error));

  return {
    props: {
      paymentdata,
    },
  };
}

const Success = ({ paymentdata }) => {
  let status = paymentdata.status;

  return (
    <Box>
      <CheckoutNavbar page="success" />
      {status === "succeeded" ? (
        <Box
          style={{ margin: "auto" }}
          width="1024px"
          justifyContent="center"
          alignItems="center"
        >
          <Grid columns={12} gap="30px">
            <Item colStart={5} colEnd={9}>
              <Box
                mt="56px"
                mb="24px"
                justifyContent="center"
                alignItems="center"
              >
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="60" cy="60" r="45" fill="#3F8728" />
                  <path
                    d="M50.6452 83.318L30 62.6728L33.9631 58.7097L50.6452 75.3917L86.0369 40L90 43.9631L50.6452 83.318Z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Box>
                <Text
                  color="black"
                  fontSize="24px"
                  fontWeight="bold"
                  lineHeight="33px"
                >
                  Payment successful of $594
                </Text>
              </Box>
              <button
                style={{
                  marginTop: "24px",
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
              >
                <Text>Okay</Text>
              </button>
            </Item>
          </Grid>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Success;
