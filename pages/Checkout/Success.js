import { Box, Text } from "native-base";
import React from "react";
import CheckoutNavbar from "../../components/Molecules/CheckoutNavbar";
import { TiTickOutline } from "react-icons/ti";
import Grid, { Item } from "../../components/Atoms/Grid";
import { authEndpoint1, orderdefaultEndpoint } from "../Property";
import { clientid, clientsecret } from "../Cred";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  if (typeof window !== "undefined") {
    // your code
    const id = query.id;
    const getData = JSON.parse(localStorage.getItem("cartid"));
  }
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
    `https://api.stripe.com/v1/payment_intents/${paymentIntent}`,
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

async function orderSuccess(orderid) {

  // console.log("invoicenumber", order.invoiceNumber);
  const auth_res = await fetch(authEndpoint1, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(clientid + ":" + clientsecret).toString("base64"),
    },
  });
  let cartid = localStorage.getItem("cartid");
  let cartversion = localStorage.getItem("cartversion");

  let res_auth = await auth_res.json();

  const clientToken = res_auth.access_token;
  const res = await fetch(`${orderdefaultEndpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + clientToken,
    },
    body: JSON.stringify({
      id: cartid,
      version: parseInt(cartversion),
      orderNumber: orderid,
    }),
  });
  const data = await res.json();

  // Adding custom field estimatedDeliveryDate with an order
  if (data) {
    const resCustom = await fetch(`${orderdefaultEndpoint}/${data.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + clientToken,
      },
      body: JSON.stringify({
        version: parseInt(data.version),

        actions: [
          {
            action: "setCustomType",
            type: {
              id: "21ca85bf-c8b7-400a-88a7-207360b6e4c7",
              typeId: "type",
            },
            fields: {
              estimatedDeliveryDate: "2021-09-30",
            },
          },
        ],
      }),
    });

    const datacustom = await resCustom.json();
  }

  localStorage.setItem("orderid", data.id);
  localStorage.removeItem("cartid");
  localStorage.removeItem("cartversion");
}
const Success = ({ paymentdata }) => {

  const router = useRouter()
  let status = paymentdata.status;
  const cartid =
    typeof window !== "undefined" ? localStorage.getItem("cartid") : null;
  const cartversion =
    typeof window !== "undefined" ? localStorage.getItem("cartversion") : null;
  let orderstatus = false;
  if (cartid !== "null" && cartversion !== "null" && status === "succeeded") {
    orderSuccess(paymentdata.id);
  }
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
              <button onClick={()=>{
                router.push("/")
              }}
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
