import React from "react";
import { AspectRatio, Box, Center, Heading, HStack, Image, Stack, Text } from "native-base";

 const ProductList =({productData})=>{




     return(      <div className="product-container">


     {productData?.items.map(item=>{
         return(
     
             <Box id="product-item" >
                   <Box maxW="80" rounded="lg" overflow="hidden">
                     <Box>
                       <AspectRatio w="100%" ratio={16 / 9}>
                         <Image source={{
                         uri: `${item.fields.productImage}`
                       }} alt="image" />
                       </AspectRatio>
                   
                     </Box>
                     <Stack p="4" space={3}>
                       <Stack space={2}>
                         <Heading size="md" ml="-1">
                          {item.fields.productName}
                         </Heading>
                         <Text fontSize="lg" _light={{
                         color: "violet.500"
                       }} _dark={{
                         color: "violet.400"
                       }} fontWeight="500" ml="-0.5" mt="-1">
                            ${item.fields.productPrice}
                         </Text>
                       </Stack>
                       <Text fontWeight="400">
                        {item.fields.productDescription}
                       </Text>
                   
                     </Stack>
                   </Box>
                 </Box>
            
         )
     })}
     
         </div>)
 }
  
 export default ProductList