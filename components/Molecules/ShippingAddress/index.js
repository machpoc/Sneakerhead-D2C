import { Box, Input, Text } from "native-base";
import { useRouter } from "next/router";
import React from "react";
import { authEndpoint1, defaultEndpointCart } from "../../../pages/Property";
import { clientsecret, clientid } from "../../../pages/Cred";
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

async function addShippingMethod() {
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

  const res = await fetch(`${defaultEndpointCart}/${cartid}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + clientToken,
    },
    body: JSON.stringify({
      version: parseInt(cartversion),

      actions: [
        {
          action: "setShippingMethod",
          shippingMethod: {
            id: "16a14274-21e6-4e38-a7a1-7b10babac614",
          },
        },
      ],
    }),
  });
  const data = await res.json();

  localStorage.setItem("cartversion", data.version);
  // updateShipping(cartConfirmResponse);
  return data;
}

//function to add shipping details to the commercetool order
async function updateShipping() {
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
  const res = await fetch(`${defaultEndpointCart}/${cartid}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + clientToken,
    },
    body: JSON.stringify({
      version: parseInt(cartversion),

      actions: [
        {
          action: "setShippingAddress",
          address: {
            id: "exampleAddress",
            key: "exampleKey",
            title: "My Address",
            salutation: "Mr.",
            firstName: "Akshay",
            lastName: "",
            streetName: "Mangalore",
            streetNumber: "4711",
            additionalStreetInfo: "Backhouse",
            postalCode: "3232121",
            city: "Mangalore",
            region: "KA",
            state: "karnataka",
            country: "US",
            company: "My Company Name",
            department: "Sales",
            building: "Hightower 1",
            apartment: "247",
            pOBox: "2471",
            phone: "+49 89 12345678",
            mobile: "+49 171 2345678",
            email: "ukahsy@gmail.com",
            fax: "+49 89 12345679",
            additionalAddressInfo: "no additional Info",
            externalId: "Information not needed",
          },
        },
        {
          action: "setShippingMethod",
          shippingMethod: {
            id: "16a14274-21e6-4e38-a7a1-7b10babac614",
          },
        },
      ],
    }),
  });
  const data = await res.json();

  localStorage.setItem("cartversion", data.version);
  return data;

  // confirmOrder(order);
}
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
            onClick={async () => {
              let data = await updateShipping();
              let data1 = await addShippingMethod();
              if (data1) {
                console.log("donensads");
                router.push("/Checkout/Payment");
              }
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
