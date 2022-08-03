import { Box, Input, Text } from "native-base";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { authEndpoint1, defaultEndpointCart } from "../../../pages/Property";
import { clientsecret, clientid } from "../../../pages/Cred";
import { withTheme } from "styled-components";

let states = [
  {
    key: "AN",
    name: "Andaman and Nicobar Islands",
  },
  {
    key: "AP",
    name: "Andhra Pradesh",
  },
  {
    key: "AR",
    name: "Arunachal Pradesh",
  },
  {
    key: "AS",
    name: "Assam",
  },
  {
    key: "BR",
    name: "Bihar",
  },
  {
    key: "CG",
    name: "Chandigarh",
  },
  {
    key: "CH",
    name: "Chhattisgarh",
  },
  {
    key: "DH",
    name: "Dadra and Nagar Haveli",
  },
  {
    key: "DD",
    name: "Daman and Diu",
  },
  {
    key: "DL",
    name: "Delhi",
  },
  {
    key: "GA",
    name: "Goa",
  },
  {
    key: "GJ",
    name: "Gujarat",
  },
  {
    key: "HR",
    name: "Haryana",
  },
  {
    key: "HP",
    name: "Himachal Pradesh",
  },
  {
    key: "JK",
    name: "Jammu and Kashmir",
  },
  {
    key: "JH",
    name: "Jharkhand",
  },
  {
    key: "KA",
    name: "Karnataka",
  },
  {
    key: "KL",
    name: "Kerala",
  },
  {
    key: "LD",
    name: "Lakshadweep",
  },
  {
    key: "MP",
    name: "Madhya Pradesh",
  },
  {
    key: "MH",
    name: "Maharashtra",
  },
  {
    key: "MN",
    name: "Manipur",
  },
  {
    key: "ML",
    name: "Meghalaya",
  },
  {
    key: "MZ",
    name: "Mizoram",
  },
  {
    key: "NL",
    name: "Nagaland",
  },
  {
    key: "OR",
    name: "Odisha",
  },
  {
    key: "PY",
    name: "Puducherry",
  },
  {
    key: "PB",
    name: "Punjab",
  },
  {
    key: "RJ",
    name: "Rajasthan",
  },
  {
    key: "SK",
    name: "Sikkim",
  },
  {
    key: "TN",
    name: "Tamil Nadu",
  },
  {
    key: "TS",
    name: "Telangana",
  },
  {
    key: "TR",
    name: "Tripura",
  },
  {
    key: "UK",
    name: "Uttarakhand",
  },
  {
    key: "UP",
    name: "Uttar Pradesh",
  },
  {
    key: "WB",
    name: "West Bengal",
  },
];
const InputComponent = ({ placeholder, value, setvalue }) => {
  return (
    <Input
      value={value}
      onChange={(e) => setvalue(e.target.value)}
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
const ShippingAddressComponent = ({theme:{colors}}) => {
  // console.log(states);
  const [email, setemail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [street, setstreet] = useState("");
  const [city, setcity] = useState("");
  const [zip, setzip] = useState("");
  const [state, setstate] = useState("");
  const [phoneno, setphoneno] = useState("");
  const router = useRouter();
  return (
    <Box>
      <Box>
        <InputComponent
          placeholder="Email Address*"
          value={email}
          setvalue={setemail}
        />
        <InputComponent
          placeholder="First Name*"
          value={fname}
          setvalue={setfname}
        />
        <InputComponent
          placeholder="Last Name*"
          value={lname}
          setvalue={setlname}
        />
        <InputComponent
          placeholder="Street Address*"
          value={street}
          setvalue={setstreet}
        />
        <InputComponent placeholder="City*" value={city} setvalue={setcity} />
        <select
          onChange={(e) => setstate(e.target.value)}
          style={{
            textIndent: "10px",
            height: "48px",
            backgroundColor: "#F0F1F1",
            borderRadius: "10px",
            maxWidth: "471px",
            marginBottom: "16px",
            borderColor: "#F0F1F1",
          }}
        >
          <option selected>Please select a region, state or province</option>
          {states.map((state) => {
            return <option value={state.key}>{state.name}</option>;
          })}
        </select>
        <InputComponent
          placeholder="Zip/Postal Code*"
          value={zip}
          setvalue={setzip}
        />
        <InputComponent
          placeholder="Phone Number*"
          value={phoneno}
          setvalue={setphoneno}
        />
        <Box width="100%" alignItems="end">
          <button
            style={{
              marginRight: 20,
              cursor: "pointer",
              justifyContent: "end",
              alignContent: "end",
              alignItems: "end",
              opacity: 1,
              backgroundColor: `${colors.primary.dark}`,
              width: "82px",
              height: "48px",

              borderRadius: 50,
              border: "0px",
              color: `${colors.light}`,
            }}
            onClick={async () => {
              let data = await updateShipping();
              let data1 = await addShippingMethod();
              if (data1) {
                router.push("/Checkout/Payment");
              }
            }}
          >
            <Text color={colors.light}>Next</Text>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default withTheme(ShippingAddressComponent);
