import React from "react";
// import { StyledSideImages } from '../../../pages/Products/[id]/Products.styled';
import ButtonComponent from "../../Atoms/Button/Button";
import Grid, { Item } from "../../Atoms/Grid";
import ButtonGroup from "../ButtonGroup";
import CheckPincode from "../CheckPincode";
import ProductList from "../productsList";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { route } from "next/dist/server/router";





const ProductDetails = ({sizeArray,colorArray,variantId,productId, ...props}) => {

  const router = useRouter()
let value = props.value;

 console.log("valuvalue",value)
 const priceData= value.masterVariant.prices[0].value.centAmount
const [price,setPrice] = useState(`${priceData}`)

const [isVariantUpdated, setVariantUpdated]= useState(false)

 
    console.log("teh data from commerce",props.value)

    useEffect(()=>{
      value.variants.map(variant=>{

        if(variantId.toString()===(variant.id).toString()){
        setPrice(variant.prices[0].value.centAmount)
        }
        // else{
        
        //    setPrice(value.masterVariant.prices[0].value.centAmount)
        
        // }
        
        
        })

    },[price,isVariantUpdated])

  function colorChangeHandler(id){

    console.log("colorChangeHandler",id)

    router.push(`/Products/${productId}/${id}`,undefined, { scroll: false });
    setVariantUpdated(!isVariantUpdated)

  }

    return ( <>
    
    <Grid columns={12} rows={1} gap={30}>

        <Item colStart={2} colEnd={3}>
          <Grid columns={1}>
            {/* <Item display="flex">
    <StyledSideImages>
    <img height={31} width={45}src={value.masterVariant.images[0].url}/>
    </StyledSideImages>
   
    </Item> */}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>{" "}
            <Item>
              <div style={{ height: "60px", width: "31px" }}>
                <img
                  height={31}
                  width={45}
                  src={value.masterVariant.images[0].url}
                />
              </div>
            </Item>
          </Grid>
        </Item>

        <Item colStart={3} colEnd={7} margin="10% 0 0 0">
          <img src={value.masterVariant.images[0].url} />
        </Item>
        <Item colStart={8} colEnd={11}>
          <h1>{value.name.en}</h1>

          <p>{value.description.en}</p>

        
 <h1>${price}</h1>



          <p>(Inclusive of all taxes)</p>



{value.variants !=false ?<>

{colorArray.map(color=>{

    return(
<button onClick={()=>colorChangeHandler(color.id)} style={{    border: "0.5px dashed",background: `${color.value}`, borderRadius: "50%", width: "20px", height: "20px",display:"inline-block",margin:"0px 4px 0px 0px"}}></button>

    )
})}

</>:<>
<div style={{ border: "0.5px dashed",background:` ${value.masterVariant.attributes[0].value}`, borderRadius: "50%", width: "20px", height: "20px",display:"inline-block",margin:"0px 4px 0px 0px"}}></div>
<div style={{ border: "0.5px dashed",background: ` ${value.masterVariant.attributes[1].value}`, borderRadius: "50%", width: "20px", height: "20px",display:"inline-block",margin:"0px 0px 0px 4px"}}></div>

</>}



<>
<p>Size</p>
<Grid columns={3} gap={10} >

    { value.variants !=false ? sizeArray.map(size=>{

        return(
            <Item margin="9px 0px 9px 0px">
            <span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK {size}</span>
        </Item>
        
        )

    }):
    <Item margin="9px 0px 9px 0px">
    <span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> FREE</span>
</Item>
    }

</Grid>


</>

<>
{/* QTY
<ButtonGroup height="30px" width="124px">
    <ButtonComponent height="100%" width="33.33%">abc</ButtonComponent>
    <ButtonComponent height="100%" width="33.33%">abc</ButtonComponent>
    <ButtonComponent height="100%" width="33.33%">abc</ButtonComponent>
</ButtonGroup> */}
          </>


<ButtonComponent fill={true} bg ="#db2727" hoverBg="#db2727"  marginBottom="5%"  marginTop="10%">ADD TO CART</ButtonComponent>

<ButtonComponent  >BUY NOW</ButtonComponent>
<CheckPincode/>
<p style={{"fontFamily":"'Open Sans'","fontStyle":"normal","fontWeight":"400","fontSize":"12px","lineHeight":"16px"}}> ={">"} 5% additional OFF on Prepaid orders<br/>
  ={'>'} Mfg.By- Bata India Limited<br/>
 ={'>'} Mkd./Cust Care:- Bata House, 418/02, Sector 17, Gurgaon Mehrauli Road, Gurgaon, Haryana 122002 </p>

 <p  style={{"fontFamily":"'Open Sans'","fontStyle":"normal","fontWeight":"400","fontSize":"16px","lineHeight":"22px","color":"#000000",textDecoration: "underline"}}>View product details</p>


</Item>

</Grid>


</> );
}
 
export default ProductDetails;
