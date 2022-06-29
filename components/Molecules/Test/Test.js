import React, { useState } from 'react';
import Product from '../Product';
// import Product from '../components/Molecules/Product';
const products ={
    items:[
        {
            id:1,
            productName:'Running shoe',
            price:"$123",
            image:"/images/3.webp"

        },
        {
            id:2,
            productName:"PARAGON Unisex's White",
            price:"$300",
            image:"/images/2.webp"

        },
        {
            id:3,
            productName:"crocs Unisex-Child Sneakers",
            price:"$423",
            image:"/images/3.webp"

        },
        {
            id:4,
            productName:"Liberty Force 10",
            price:"$99",
            image:"/images/4.webp"

        },
        {
            id:5,
            productName:"Axter Kids & Boys",
            price:"$132",
            image:"/images/4.webp"

        },
        {
            id:6,
            productName:"Sparx Boy's Black Red",
            price:"$636",
            image:"/images/3.webp"

        },
        {
            id:7,
            productName:"BOOMER CUBS Kids Unisex",
            price:"$94",
            image:"/images/2.webp"

        },
        {
            id:8,
            productName:"Coolz Kids Unisex Shoes",
            price:"$199",
            image:"/images/3.webp"

        },
       
        
    ]
}
const Test = () => {

const [data,setData] = useState(products.items.slice(0,4))
const [isDataChanged,setIsDataChanged]=useState(false)

function dataChangeHandler(){

if (isDataChanged){
    setData(products.items.slice(0,4))
    setIsDataChanged(!isDataChanged)
}
else {
    setData(products.items.slice(4,8))
    setIsDataChanged(!isDataChanged)
}

}
    return ( <>
    
  
    <div style={{display:"flex",flexDirection:'row',justifyContent:"center",maxWidth: "1000px", position: "relative", margin: "auto"}}>

   { data.map(item=>{
    return(
        
       <Product
        productImage={item.image}
        productName={item.productName}
        productDescription="LL SUN RX 02"
        productPrice="$594"
        marginRight="2.5rem"
        marginLeft="2.5rem"
        
        />
    
    )
    })
   }   
  <button style={{cursor: "pointer",position:"absolute",left:"-4%",top:"50%",backgroundColor:"transparent",border:'none',fontSize:"1.2rem"}} onClick={dataChangeHandler}>❮</button>
    <button style={{cursor: "pointer",position:"absolute",right:"-4.5%",top:"50%",backgroundColor:"transparent",border:'none',fontSize:"1.2rem"}} onClick={dataChangeHandler}>❯</button>

    </div>

  

    
    </> );
}
 
export default Test;