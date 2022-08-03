import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  Stack,
  Image,
  Text,
  Button,
  Pressable,
  Flex,
} from "native-base";
import React, { useState } from "react";
import Grid, { Item } from "../../Atoms/Grid";
import { RiHeartLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { authEndpoint1, defaultEndpointCart } from "../../../pages/Property";
import { clientid, clientsecret } from "../../../pages/Cred";
import { withTheme } from "styled-components";

const img = require("/public/images/32262551-front-940x529.webp");

async function BuyNow(prodid) {
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
          action: "addLineItem",
          productId: prodid,
          variantId: 1,
          quantity: 1,
          supplyChannel: {
            typeId: "channel",
            //channel id from commercetool
            id: "a386fdda-6583-4748-b650-ef11c9ad031f",
          },
          distributionChannel: {
            typeId: "channel",
            id: "a386fdda-6583-4748-b650-ef11c9ad031f",
          },
        },
      ],
    }),
  });
  const data = await res.json();

  if (data) {
    localStorage.setItem("cartversion", data.version);
  }
  return data;
}

const ProductList = ({
  isVariant,
  productId,
  productImage,
  productName,
  productDescription,
  productPrice,
  theme:{colors},
  ...props
}) => {
  const [buttonstyle, setbuttonstyle] = useState({ display: "none" });
  const [isHovering, setisHovering] = useState(false);
  const router = useRouter();
  // console.log(completeData)
  return (
    <>
      <div
        onClick={() => {
      
if(isVariant){
  router.push(`/Products/${productId}/2`);
}else{
  router.push(`/Products/${productId}`);

}

        }}
        onMouseEnter={(e) => {
          setbuttonstyle({ display: "block" });
          setisHovering(true);
        }}
        onMouseLeave={(e) => {
          setisHovering(false);
          setbuttonstyle({ display: "none" });
        }}
        style={{
          minHeight: "312px",
          minWidth: "209px",
          maxHeight: "312px",
          maxWidth: "209px",
          alignItems: "center",
          cursor: "pointer",
          gridColumn: "span 3",
          overflow: "hidden",
          border: isHovering ? "1px solid #C1C3C4" : "",
          boxShadow: isHovering ? "0px 0px 5px 2px rgba(0, 0, 0, 0.25)" : "",
        }}
      >
        <Flex pl="1" pr="1" direction="row" mt={5}>
          <img src={productImage} height={125} width={180} />
          <RiHeartLine />
        </Flex>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading
              fontSize={12}
              lineHeight={16}
              ml="-1"
              _dark={{
                color: "black.800",
              }}
              fontWeight="800"
            >
              {productName.slice(0, 20)}...
            </Heading>
            <Text
              fontSize="10"
              _light={{
                color: "black.500",
              }}
              _dark={{
                color: "black.400",
              }}
              fontWeight="400"
              ml="-0.5"
              mt="-1"
            >
              {productDescription.slice(0, 30)}...
            </Text>
          </Stack>

          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                fontSize="12"
                lineHeight="16px"
                color="coolGray.600"
                _dark={{
                  color: "black.200",
                }}
                fontWeight="800"
              >
                ${productPrice}
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <Box alignItems="center" alignContent="center" justifyContent="center">
          <Button
            onPress={async () => {
              let data = await BuyNow(productId);
              if (data) {
                router.push("/cart");
              }
            }}
            w="109px"
            h="43px"
            borderRadius={30}
            backgroundColor={colors.primary.dark}
            color={`${colors.light}`}
            style={{
              display: isHovering ? "block" : "none",
            }}
          >
            <Text
              alignItems="center"
              alignContent="center"
              justifyContent="center"
              fontSize="md"
              fontWeight="700"
              lineHeight="19px"
              pt={1}
              pl={1}
              color={`${colors.light}`}
            >
              Buy Now
            </Text>
          </Button>
        </Box>
      </div>
    </>
  );
};

export default withTheme(ProductList);
