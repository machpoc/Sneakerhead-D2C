import React, { useState } from "react";
import CarousalProduct from "../CarousalProduct";
// import Product from '../components/Molecules/Product';

const Carousal = ({ data }) => {
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

const variantData = item.variants

          return (
            <CarousalProduct
            isVariant={variantData.length}
              productImage={item.masterVariant.images[0].url}
              productName={item.name.en}
              productDescription={item.description.en}
              productPrice={item.masterVariant.prices[0].value.centAmount}
              id={item.id}
              marginRight="2.5rem"
              marginLeft="2.5rem"
            />
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
            fontSize: "var(--fs-sneakerhead-500)",
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
            fontSize: "var(--fs-sneakerhead-500)",
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

export default Carousal;
