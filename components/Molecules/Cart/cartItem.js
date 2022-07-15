import { Box, Divider, Flex, Text } from "native-base";
import React from "react";
const CartItem = ({ data, divider }) => {
  return (
    <Box>
      <Flex mt="24px" mb="20px" direction="row" justifyContent="space-between">
        <Box>
          <img
            style={{ maxWidth: "200px", maxHeight: "140px" }}
            src={data.variant.images[0].url}
          />
        </Box>
        <Box width="40%" pl="24px">
          <Text
            pb="8px"
            color="black"
            fontSize="16px"
            lineHeight="22px"
            fontWeight="bold"
          >
            {data.name.en}
          </Text>
          <Text pb="4px" fontSize="12px" lineHeight="16px" color="#555553">
            Men's Hard Court Tennis Shoes
          </Text>
          <Text pb="4px" fontSize="12px" lineHeight="16px" color="#555553">
            Color- {data.variant.attributes[0].value}
          </Text>
          <Flex direction="row">
            <Text
              pb="4px"
              pr="16px"
              fontSize="12px"
              lineHeight="16px"
              color="#555553"
            >
              Size - UK {data.variant.attributes[1].value}
            </Text>
            <Text pb="4px" fontSize="12px" lineHeight="16px" color="#555553">
              Quantity - {data.quantity}
            </Text>
          </Flex>
        </Box>
        <Box>
          <Text
            pb="8px"
            color="black"
            fontSize="16px"
            lineHeight="22px"
            fontWeight="bold"
          >
            ${data.price.value.centAmount}
          </Text>
        </Box>
      </Flex>
      {divider === true ? (
        <Divider style={{ border: "1px solid #C1C3C4" }} />
      ) : (
        ""
      )}
    </Box>
  );
};

export default CartItem;
