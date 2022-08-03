import React from 'react';
import Grid, { Item } from '../../components/Atoms/Grid';
import ContactMode from '../../components/Molecules/ContactMode';
import ContactUs from '../../components/Molecules/ContactUs';
import Footer from '../../components/Molecules/Footer';
import Navbar from '../../components/Molecules/NavBar';
import ContentBannner from '../../components/Molecules/ContentBanner';
import { withTheme } from 'styled-components';



const ContentPage = ({theme:{colors}}) => {
    return ( <>
         <Navbar />
        <ContentBannner
        header="TAKE CARE OF NATURE"
      />

      <Grid columns={12} marginTop="2rem" >
<Item colStart={2} colEnd={6}  >
<span style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "30px", lineHeight: "41px", color: "#000000"}}>Our goal is to make a positive long-term impact</span>
</Item>
<Item colStart={7} colEnd={12}>
</Item>
      </Grid>

<Grid columns={12} marginTop="2rem">
    <Item colStart={2} colEnd={12}>
        <span style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "20px", lineHeight: "27px"}}>The most often quoted definition comes from the UN World Commission on Environment and Development: “sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs.”</span>
        </Item>
        <Item colStart={2} colEnd={12} display="flex" margin="1rem 0 1rem 0" >
        <iframe width="100%" height="700px"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
        </Item>
        <Item colStart={2} colEnd={12}>
        <span style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "20px", lineHeight: "27px"}}>
In the charter for the UCLA Sustainability Committee, sustainability is defined as: “the integration of environmental health, social equity and economic vitality in order to create thriving, healthy, diverse and resilient communities for this generation and generations to come. The practice of sustainability recognizes how these issues are interconnected and requires a systems approach and an acknowledgement of complexity.”

</span>
</Item>
</Grid>

<Grid columns={12} marginTop="2rem">
<Item colStart={3} colEnd={6} borderRight="1px solid #000000" margin="0 18% 0 0">

<span style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "100px", lineHeight: "136px",color:`${colors.primary.dark}`}}>66%</span>
<div>Landfill waste material dropped</div>
</Item>
<Item colStart={6} colEnd={9} borderRight="1px solid #000000" margin="0 18% 0 0">
<span style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "100px", lineHeight: "136px",color:`${colors.primary.dark}`}}>72%</span>
<div>Less energy and water than creating new paper products</div>

</Item>
<Item colStart={9} colEnd={12}>


<span style={{fontFamily: "'Open Sans'", fontStyle: "normal", fontWeight: "700", fontSize: "100px", lineHeight: "136px",color:`${colors.primary.dark}`}}>17</span>
<div>We save 17 trees per each tonne of paper</div>
</Item>
</Grid>
<Grid marginTop="2rem" marginBottom="16px">
        <ContactUs />
      </Grid>
      <ContactMode />

      <Footer />

    </> );
}
 
export default withTheme(ContentPage);