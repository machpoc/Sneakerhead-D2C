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





const VariantDetails = ({sizeArray,variantId,productId, ...props}) => {

  
  const router = useRouter()
let value = props.value;

 console.log("valuvalue",value)
const variantValue=[value][0].variants[0]

console.log("variantValue",variantValue)


const [variantData,setVariantData] = useState(variantValue)
const [sizeDataAfterChange, setsizeDataAfterChange] = useState([]);
const [showSize, setShowSize] = useState(false);





console.log( "variantData", variantData)

const [isVariantUpdated, setVariantUpdated]= useState(false)

 
    console.log("teh data from commerce",props.value)

    useEffect(()=>{

      router.events.on('routeChangeStart',()=>{
        value.variants.map(variant=>{

          if(variantId.toString()===(variant.id).toString()){
            setVariantData(variant)
          }
          // else{
          
          //    setPrice(value.masterVariant.prices[0].value.centAmount)
          
          // }
          
          
          })
      })
      

    },[variantData,isVariantUpdated])

    // router.events.on('routeChangeStart',setVariantUpdated(!isVariantUpdated))

  function colorChangeHandler(id){

    console.log("colorChangeHandler",id)

    router.push(`/Products/${productId}/${id}`,undefined, { scroll: false });
    setVariantUpdated(!isVariantUpdated)

  }



  let productsizedetail = null;
  let attributes = [];
  let colorAttributes = []; // variable for all color data
  let uniqueColorAttributes=[];// removing the duplicates from color data
  let sizeAttributes = [];  // variable for all size data
  let initialSizeData = []; // variable using to store size data when page loads initally
  let initialColorData =[];
  let colorArray=[];
  let colorId=[];

  if (value) {
    value.variants.map((variant) => {
      variant.attributes.map((attr) => {
         
        // if variant.attribute value has no key storing all size data in to sizeAttributes
        if (attr.value) {
          let temp1 = {
            id: variant.id,
            key: variant.key,
            name: attr.name,
            value: attr.value,
          };
          colorAttributes.push(temp1);
         //remove the duplicates in colorAttributes and storing to uniqueColorAttributes

         console.log("colorAttributes2",colorAttributes)

           uniqueColorAttributes = colorAttributes.filter((colorAttributes, index, self) =>
    index === self.findIndex((t) => (t.value === colorAttributes.value)))
    
    
    
    uniqueColorAttributes= uniqueColorAttributes.filter((color)=>color.name==="color")
    
    console.log("uniqueColorAttributes222",uniqueColorAttributes)
    
    let temp2 = {
      id: variant.id,
      name: attr.name,
      value: attr.value,
    }


    sizeAttributes.push(temp2);
    
    // storing all colors filter by variant id

    console.log("variantId",variantId)


     initialColorData = colorAttributes.filter(
      (size) => size.id.toString() === variantId.toString() 
    );
    
        }
      });
    });

    console.log("initialColorData",initialColorData)

    //getting all color data with same color in initial selected color
console.log("colorAttributes",colorAttributes)

    colorArray= colorAttributes.filter(
      (size) => size.value.toString() === initialColorData[0].value.toString() );
    
      // storing all color data ids which same has selected color
      colorArray.map((data) => {
        colorId.push(data.id)
      })

      // storing all sizes related wit initial selected color
    initialSizeData = sizeAttributes.filter(
      (size) =>  colorId.includes(size.id) && size.name.includes('size')
    );

  } else if (value.masterData.productProjection.name["en-US"]) {
    if (value.masterData.productProjection.variants.length > 0) {
      value.masterData.productProjection.masterVariant.attributes.map(
        (attr) => {
          let temp = {
            name: attr.name,
            value: attr.value.key ? attr.value.label : attr.value,
          };
          attributes.push(temp);
        }
      );
    }
  }

/*  Unique color data and initial size data storing End    */

console.log("uniqueColorAttributes",uniqueColorAttributes)
  if (uniqueColorAttributes.length > 0) {

    console.log("entering uniqueColorAttributes ", uniqueColorAttributes)

    productsizedetail = (
      <div>

{uniqueColorAttributes.map((attr, index) => {
  return(
<button value={attr.value} onClick={sizeInfo} style={{    border: "0.5px dashed",background: `${attr.value}`, borderRadius: "50%", width: "20px", height: "20px",display:"inline-block",margin:"0px 4px 0px 0px"}}></button>
  )
})
}

      
      <div>
       {showSize&& <label style={{ padding: "0px 10px 0px 10px" }}>Size</label>}
        
        </div>
        <Grid columns={3} gap={10} >

{ value.variants !=false ?sizeDataAfterChange.map((attr, index) => {

    return(
        <Item margin="9px 0px 9px 0px">
        <button value={attr.id} onClick={displayProduct} style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> UK {attr.value}</button>
    </Item>
    
    )

}):
<Item margin="9px 0px 9px 0px">
<span style={{background: "#FFFFFF", border: "1px solid #C1C3C4", borderRadius: "10px",fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "22px",padding:"8px 31px 8px 31px"}}> FREE</span>
</Item>
}

</Grid>
      </div>
    );
  }
  function displayProduct(e){
    const colorId = e.target.value;
    router.push(`/Products/${productId}/${colorId}`,undefined, { scroll: false });
    setVariantUpdated(!isVariantUpdated)
  }
function sizeInfo(e){
  setShowSize(true)
  const color = e.target.value;
 
  const size = colorAttributes.filter(
    (size) => size.value.toString() === color.toString()
  );

  const sizeCount=size.length;
  if(sizeCount<2){
    const sizeId=size[0].id;
    const sizeArray = sizeAttributes.filter(
      (size) => size.id.toString() === sizeId.toString() && size.name.includes('size')
    );
    setsizeDataAfterChange(sizeArray);
    router.push(`/Products/${productId}/${sizeId}`,undefined, { scroll: false });
      setVariantUpdated(!isVariantUpdated)
  }else{
    const sizeValue=size[0].value;
    const colorId=size[0].id;
    var sizeIdArray=[];
    const colorArray = colorAttributes.filter(
      (size) => size.value.toString() === sizeValue.toString()
    )
    colorArray.map((data) => {
      sizeIdArray.push(data.id)
    })
    const sizeArray = sizeAttributes.filter(
      (size) => sizeIdArray.includes(size.id) && size.name.includes('size')
    );
    setsizeDataAfterChange(sizeArray);
 console.log('a',sizeAttributes)
 console.log('b',sizeArray)
   router.push(`/Products/${productId}/${colorId}`,undefined, { scroll: false });
   setVariantUpdated(!isVariantUpdated)
  }

}
  function displaySize(e) {
    if (e.target.value) {
      const colorId = e.target.value;
      const sizeArray = sizeAttributes.filter(
        (size) => size.id.toString() === colorId.toString()
      );
      //console.log(sizeAttributes)
      setsizeDataAfterChange(sizeArray);

      router.push(`/Products/${productId}/${colorId}`,undefined, { scroll: false });
    }
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

        
{ <h1>${variantData.prices[0].value.centAmount/100}</h1>}



          <p>(Inclusive of all taxes)</p>

         

          {productsizedetail}

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
 
export default VariantDetails;
