import React, { useEffect } from "react";
import useSWR from "swr";
const Cart = () => {
  const { data: productData } = useSWR("/api/getProducts");
  console.log(productData);
  return <div>{<div>Hello </div>}</div>;
};

export default Cart;
