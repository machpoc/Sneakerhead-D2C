import { AspectRatio, Box, Center, Heading, HStack, Stack,Image,Text } from 'native-base'
import React from 'react'
import { withTheme } from 'styled-components'
import Grid, { Item } from '../../Atoms/Grid'
// import Image from '../../Atoms/Image'
// import Text from '../../Atoms/Text'
import {StyledImage} from './Product.styled'
const img = require('/public/images/32262551-front-940x529.webp')

const Product=({productImage,productName,
    productDescription,
    productPrice,
    ...props
  })=>{


    return(
            
        <>
        <Box>
        <Box maxW={196}   maxH={245} minH={245} rounded="lg"  marginBottom={props.marginBottom} marginRight={props.marginRight} marginLeft={props.marginLeft} overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "var(--sneakerhead-white)",
        backgroundColor: "var(--sneakerhead-white)"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "var(--sneakerhead-white)"
      }}>
        <StyledImage>
          <Box>
            {/* <AspectRatio w="100%" ratio={16 / 9}>
           
              <Image source={{
              uri: `${productImage}`
            }} alt="image" />
            </AspectRatio> */}            
            <img src={productImage} />
          </Box>

          </StyledImage>
          </Box>
          <Box maxW={200}   minH={100} rounded="lg"  marginBottom={props.marginBottom} marginRight={props.marginRight} marginLeft={props.marginLeft} overflow="hidden" >
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1"  _dark={{
              color: "black.800"
            }} fontWeight="600">
               {productName.slice(0,20)}...
              </Heading>
              <Text fontSize="xs" _light={{
              color: "black.500"
            }} _dark={{
              color: "black.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
             {productDescription.slice(0,30)}...
              </Text>
            </Stack>
           
            <HStack  alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" _dark={{
                color: "black.200"
              }} fontWeight="800">
                 ${productPrice}
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
        </Box>
   

</>
                
//         <div className='product-container' >
//             <div  >
//                 <Center>
//             <Image  height={529} width={940}
//     source={{ uri: img.default.src }}
//   /> </Center>
//             </div>
//             <div style={{"textOverflow":"ellipsis","overflow":"hidden","whiteSpace":"nowrap","paddingTop":"2px","paddingBottom":"2px"}} rowStart="6" rowEnd="7" >
//             <Text fontSize="xl">qqqasjajkodjaodjaokdo</Text>
//             </div>
//             <div >
//   <Text fontSize="lg">asjajkodjaodjaokdo</Text>
                
//             </div>
//         </div>

    )
}

export default withTheme(Product)