import React, { useEffect, useRef, useState } from "react";
import Grid from "../components/Atoms/Grid";
import { Box, Button, Divider, Flex, Text } from "native-base";
import {
  authEndpoint,
  defaultEndpointProducts,
  categoryEndpoint,
} from "./Property";

import { clientsecret, clientToken, clientid } from "./Cred";
import ProductList from "../components/Molecules/ProductList";
import Filter from "../components/Molecules/ProductFilter";
import Navbar from "../components/Molecules/NavBar.js";

export async function getServerSideProps() {
  const auth_res = await fetch(authEndpoint, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(clientid + ":" + clientsecret).toString("base64"),
    },
  });

  let res_auth = await auth_res.json();

  const clientToken = res_auth.access_token;
  const res = await fetch(defaultEndpointProducts, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + clientToken,
    },
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const Products = ({ data }) => {
  const [prodsToShow, setprodsToShow] = useState([]);
  const prodsPerPage = 12;
  let arrayForHoldingProds = [];
  if (arrayForHoldingProds.length === 0) {
    arrayForHoldingProds = prodsToShow;
  }
  const ref = useRef(prodsPerPage);

  const loopWithSlice = (start, end) => {
    const slicedPosts = data.results.slice(start, end);

    arrayForHoldingProds = arrayForHoldingProds.concat(slicedPosts);
    // arrayForHoldingPosts.push.apply(arrayForHoldingPosts, slicedPosts);

    setprodsToShow(arrayForHoldingProds);
  };
  useEffect(() => {
    loopWithSlice(0, prodsPerPage);
  }, []);
  const handleShowMorePosts = () => {
    loopWithSlice(ref.current, ref.current + prodsPerPage);
    ref.current += prodsPerPage;
  };

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
              {data.total} Products
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
        <Grid columns={12} gap="30px">
          {prodsToShow.length > 0
            ? prodsToShow.map((item) => {
                return (
                  <ProductList
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
      </Box>
      <Box
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        style={{ position: "relative" }}
      >
        <Box
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          style={{ position: "absolute" }}
        >
          <Filter />
          <Button
            mt="83px"
            w="109px"
            h="43px"
            style={{ border: "solid 1px #D31424" }}
            borderRadius={30}
            backgroundColor={"white"}
            onPress={() => {
              handleShowMorePosts();
            }}
          >
            <Text color="#D31424">Load More</Text>
          </Button>
        </Box>
        <Box
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          style={{ position: "relative" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Products;
