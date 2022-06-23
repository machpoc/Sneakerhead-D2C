import React from 'react';
import ButtonComponent from '../../../Atoms/Button/Button';



import Grid, { Item } from "../../../Atoms/Grid";




const Navbar = () => {
  const StyledHeading = {
    color:"#000",
    margin:"60px",
    fontSize:"10px",
    fontWeight:"600",
    fontFamily: "Arial, Helvetica",
    }
 

    const CenterLogo={
     width:"55px",
     height:"auto",
     display: "block",
     marginLeft: "auto",
     marginRight: "auto",
     marginBottom:"0px",

    }

    const LoginLink={
      color:"#D31424",
      fontSize:"10px",
      textAlign:"right",
      fontWeight:"600",
      width:"100%",
      fontFamily: "Arial, Helvetica",
      padding:"20px"
      }
   
      const BookButton={
       position:"absolute",
       right:"15px",
        background:"#D31424",
        color:"white",
        fontFamily: "Arial, Helvetica",
        fontSize:"8px",
        border:"none",
        borderRadius:"15px",
        fontWeight:"600",
        padding:"9px"

      }
      const NavUl={
      
          listStyleType: "none",
          margin: "0",
          padding: "0",
          overflow: "hidden",
              
      }

      const NavLi={
        float: "left",  
      }

      const NavLink={
        display: "block",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none",
        color:"#000",
        fontSize:".7rem",
        fontWeight:"600",
        fontFamily: "Arial, Helvetica",
      }
    return ( 


<>

<Grid columns={3} rows={1} >
    <Item>
    <span style={StyledHeading}>Find a store</span>

    </Item>
    <Item >
    <h3 style={CenterLogo}>SneakerHead</h3>
    
      </Item>
       <Item>
      <div style={LoginLink}>Log in</div>
        </Item>
</Grid>


<Grid columns={3} rows={1} >
    <Item>
 
    </Item>
    <Item >
    <ul style={NavUl}>
  <li style={NavLi}><a href="#home" style={NavLink}>Glasses</a></li>
  <li style={NavLi}><a href="#news" style={NavLink}>Contact lenses</a></li>
  <li style={NavLi}><a href="#contact" style={NavLink}>Eye health</a></li>
  <li style={NavLi}><a href="#about" style={NavLink}>Offers</a></li>
</ul>

      </Item>
       <Item>
         
         <ButtonComponent buttonBg="#D31424" hoverBg="#D31424" width={140} fill={false} >Book appointment</ButtonComponent>
        
        
        </Item>
</Grid>
</>

     );
}
 
export default Navbar;