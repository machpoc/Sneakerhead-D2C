import React, { useState } from "react";
import CarousalProduct from "../CarousalProduct";
// import Product from '../components/Molecules/Product';

const Carousal = ({ data }) => {
  const [productData, setData] = useState(data ? data.results.slice(0, 4) : []);
  const [isDataChanged, setIsDataChanged] = useState(false);

  function dataChangeHandler() {
    if (isDataChanged) {
      setData(data.results.slice(0, 4));
      setIsDataChanged(!isDataChanged);
    } else {
      setData(data.results.slice(4, 8));
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
          return (
            <CarousalProduct
              productImage={item.masterVariant.images[0].url}
              productName={item.name.en}
              productDescription={item.description.en}
              productPrice={item.masterVariant.prices[0].value.centAmount}
              marginRight="2.5rem"
              marginLeft="2.5rem"
            />
          );
        })}
        <button
          style={{
            cursor: "pointer",
            position: "absolute",
            left: "-8%",
            top:" 53%",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "1.2rem",
          }}
          onClick={dataChangeHandler}
        >
          ❮
        </button>
        <button
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "-6.5%",
            top: "48%",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "1.2rem",
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
