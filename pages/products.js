import React, { useEffect, useRef, useState } from "react";
import Grid from "../components/Atoms/Grid";
import { Box, Button, Divider, Flex, Text } from "native-base";
import {
  authEndpoint,
  defaultEndpointProducts,
  categoryEndpoint,
} from "./Property";
import useSWR from "swr";
import { clientsecret, clientToken, clientid } from "./Cred";
import ProductList from "../components/Molecules/ProductListComponent";
import Filter from "../components/Molecules/ProductFilter";
import Navbar from "../components/Molecules/NavBar/index.js";

const ProductsComponent = (pageIndex, setPageIndex) => {
  console.log(pageIndex.pageIndex);
  const { data: data } = useSWR(
    `/api/getProducts?limit=${pageIndex.pageIndex}`
  );
  if (!data) <h1>Loading...</h1>;
  if (data) {
    console.log(data);
    return (
      <Grid columns={12} gap="30px">
        {data.length > 0
          ? data.map((item) => {
              return (
                <ProductList
                  productId={item.id}
                  key={item.id}
                  productImage={item.masterVariant.images[0].url}
                  productName={item.name.en}
                  productDescription={item.description.en}
                  productPrice={item.masterVariant.prices[0].value.centAmount}
                />
              );
            })
          : ""}
      </Grid>
    );
  } else {
    return null;
  }
};

const Products = ({}) => {
  const [pageIndex, setPageIndex] = useState(12);
  const { data: data } = useSWR(`/api/getProductCount?limit=${pageIndex}`);
  return (
    <Box style={{ position: "relative", width: "100vw" }}>
      <Navbar />
      <Box mb="24px" style={{ width: "100vw" }}>
        <Divider style={{ border: "1px solid #C1C3C4" }} />
        <Flex
          direction="row"
          h="48px"
          alignContent="center"
          alignItem="center"
          justifyContent="space-between"
        >
          <Box
            ml="58px"
            alignContent="center"
            alignItem="center"
            justifyContent="center"
          >
            <Text
              fontSize="12px"
              lineHeight="16px"
              fontWeight="400"
              color="black"
              textTransform="uppercase"
            >
              {data ? <div>{data.total} Products </div> : ""}
            </Text>
          </Box>
          <Box
            alignContent="center"
            alignItem="center"
            justifyContent="center"
            mr="62"
          >
            <Flex direction="row">
              <Text
                fontSize="12px"
                lineHeight="16px"
                fontWeight="400"
                color="black"
                textTransform="uppercase"
              >
                SORT BY:
              </Text>
              <select style={{ marginLeft: 5, border: "none" }}>
                <option style={{ backgroundColor: "#B390D" }}>Newest</option>
                <option>Popularity</option>
                <option>Price - Hight to low</option>
                <option>Price - Low to high</option>
              </select>
            </Flex>
          </Box>
        </Flex>
        <Divider style={{ border: "1px solid #C1C3C4" }} />
      </Box>

      <Box
        ml={58}
        mr={58}
        maxWidth="1024px"
        alignItem="center"
        style={{ margin: "auto" }}
      >
        <div style={{ display: "none" }}>
          <ProductsComponent pageIndex={pageIndex + 12} />
        </div>
        <ProductsComponent pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </Box>
      <Box alignItems="center" alignContent="center" justifyContent="center">
        <Box
          bottom="70px"
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          style={{ position: "fixed" }}
        >
          <Filter />
        </Box>
        <Box alignItems="center" alignContent="center" justifyContent="center">
          {" "}
          <Button
            w="109px"
            h="43px"
            style={{ border: "solid 1px #D31424" }}
            borderRadius={30}
            backgroundColor={"white"}
            onPress={() => {
              setPageIndex(pageIndex + 12);
            }}
          >
            <Text color="#D31424">Load More</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
  // } else {
  //   return <div>loading...</div>;
};
// };
export default Products;
