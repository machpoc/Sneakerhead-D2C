import {
  AspectRatio,
  Box,
  Heading,
  Stack,
  HStack,
  Image,
  Text,
} from "native-base";
import React, { useState } from "react";
import { withTheme } from "styled-components";
import Product from "../Product";
import ProductList from "../productsList";
// import Product from '../components/Molecules/Product'
import SubHeader from "../SubHeader";
import { StledDiv } from "./YouMaylike.styled";
const products = {
  items: [
    {
      id: 1,
      productName: "Running shoe",
      price: "$123",
      image: "/images/3.webp",
    },
    {
      id: 2,
      productName: "PARAGON Unisex's White",
      price: "$300",
      image: "/images/2.webp",
    },
    {
      id: 3,
      productName: "crocs Unisex-Child Sneakers",
      price: "$423",
      image: "/images/3.webp",
    },
    {
      id: 4,
      productName: "Liberty Force 10",
      price: "$99",
      image: "/images/4.webp",
    },
    {
      id: 5,
      productName: "Axter Kids & Boys",
      price: "$132",
      image: "/images/4.webp",
    },
    {
      id: 6,
      productName: "Sparx Boy's Black Red",
      price: "$636",
      image: "/images/3.webp",
    },
    {
      id: 7,
      productName: "BOOMER CUBS Kids Unisex",
      price: "$94",
      image: "/images/2.webp",
    },
    {
      id: 8,
      productName: "Coolz Kids Unisex Shoes",
      price: "$199",
      image: "/images/3.webp",
    },
  ],
};

const YouMayLike = ({ data,theme:{colors} }) => {
  const [productData, setData] = useState(data ? data.slice(0, 4) : []);
  const [isDataChanged, setIsDataChanged] = useState(false);

  function dataChangeHandler() {
    if (isDataChanged) {
      setData(data.slice(0, 4));
      setIsDataChanged(!isDataChanged);
    } else {
      setData(data.slice(4, 8));
      setIsDataChanged(!isDataChanged);
    }
  }
  return (
    <>
      <SubHeader color={colors.primary.dark}>You may also like</SubHeader>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          maxWidth: "1000px",
          position: "relative",
          margin: "auto",
        }}
      >
        {productData.map((item) => {
          return (
            <>
              <StledDiv>
                <ProductList data={item} />
              </StledDiv>
            </>
          );
        })}
        <button
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "5%",
            top:"-19%",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "18px",
            background: "#C1C3C4",
            borderRadius: "50%",
            width: "40px",
            height: "40px"
          }}
          onClick={dataChangeHandler}
        >
          ❮
        </button>
        <button
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "0%",
            top: "-19%",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "18px",
            background: "#C1C3C4",
            borderRadius: "50%",
            width: "40px",
            height: "40px"
          }}
          onClick={dataChangeHandler}
        >
          ❯
        </button>
      </div>
    </>
  );
};

export default withTheme(YouMayLike);
