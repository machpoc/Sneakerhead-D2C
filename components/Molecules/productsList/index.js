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

const img = require("/public/images/32262551-front-940x529.webp");

const ProductList = ({
  productImage,
  productName,
  productDescription,
  productPrice,
data,
  ...props

}) => {
  const [buttonstyle, setbuttonstyle] = useState({ display: "none" });
  const [isHovering, setisHovering] = useState(false);
console.log("data in u may like",data)
  return (
    <>
      <div
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
          gridColumn: "span 3",
          overflow: "hidden",
          border: isHovering ? "1px solid #C1C3C4" : "",
        }}
      >
        <Flex pl="1" pr="1" direction="row" mt={5}>
          <img src={data.masterVariant.images[0].url} height={125} width={180} />
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
              {data.name.en}
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
             {data.description.en}
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
                ${data.masterVariant.prices[0].value.centAmount}
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <Box alignItems="center" alignContent="center" justifyContent="center">
          <Button
            w="109px"
            h="43px"
            borderRadius={30}
            backgroundColor="#D31424"
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
            >
              Buy Now
            </Text>
          </Button>
        </Box>
      </div>
    </>
  );
};

export default ProductList;
