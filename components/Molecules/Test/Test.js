import React, { useState } from 'react';
import Product from '../Product';
// import Product from '../components/Molecules/Product';
const products ={
    items:[
        {
            id:1,
            productName:'abc',
            price:1234,

        },
        {
            id:2,
            productName:"2abc",
            price:1234,

        },
        {
            id:3,
            productName:"3abc",
            price:1234,

        },
        {
            id:4,
            productName:"4abc",
            price:1234,

        },
        {
            id:5,
            productName:"5abc",
            price:1234,

        },
        {
            id:6,
            productName:"6abc",
            price:1234,

        },
        {
            id:7,
            productName:"7abc",
            price:1234,

        },
        {
            id:8,
            productName:"8abc",
            price:1234,

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
        productImage="https://images.specsavers.com/glasses-images/32263435-front-940x529.jpg"
        productName={item.productName}
        productDescription="LL SUN RX 02"
        productPrice="$594"
        marginRight="1rem"
        marginLeft="1rem"
        
        />
    
    )
    })
   }   
  <button style={{cursor: "pointer",position:"absolute",left:"-7%",top:"50%",backgroundColor:"transparent",border:'none',fontSize:"1.2rem"}} onClick={dataChangeHandler}>❮</button>
    <button style={{cursor: "pointer",position:"absolute",right:"-4.5%",top:"50%",backgroundColor:"transparent",border:'none',fontSize:"1.2rem"}} onClick={dataChangeHandler}>❯</button>

    </div>

  

    
    </> );
}
 
export default Test;