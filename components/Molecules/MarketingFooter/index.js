import { Box, Heading, HStack, Stack, Text } from 'native-base';
import React from 'react';
const MarketingFooter = ({productImage,productName,
    productDescription,
    productPrice,
    ...props
  }) => {
    return ( 

  

        <Box maxW="320" rounded="lg"  marginBottom={props.marginBottom} marginRight={props.marginRight} overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "white",
        backgroundColor: "white"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "#C1C3C4"
      }}>
          <Box  
      bg="#C1C3C4">
            {/* <AspectRatio w="100%" ratio={16 / 9}>
           
              <Image source={{
              uri: `${productImage}`
            }} alt="image" />
            </AspectRatio> */}


            
            <img height= {220} width= {320} src={productImage}/>
          </Box>
          <Stack p="8" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1"  _dark={{
              color: "black.800"
            }} fontWeight="500">
               {productName}
              </Heading>
              <Text fontSize="s" _light={{
              color: "black"
            }} _dark={{
              color: "black"
            }} fontWeight="400" >
             {productDescription}
              </Text>
            </Stack>
           
            <HStack alignItems="center" space={2} justifyContent="space-between">
              <HStack alignItems="center">
                <Text>
                 {productPrice}
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
 


     );
}
 
export default MarketingFooter;