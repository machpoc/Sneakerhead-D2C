import React from 'react';
import ButtonComponent from '../../Atoms/Button/Button';



import Grid, { Item } from "../../Atoms/Grid";




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
      padding:"11px"
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



<Grid rows={1} columns={3} justifyItems="center" >
  <Item>
    <span>
    <select style={{padding:"6px",border: "1px solid #555553", borderRadius: "30px",marginTop:"14px"}}>
  <option  value="volvo" style={{fontWeight: "400", fontSize: "12px", lineHeight: "16px"}}>English</option>
  <option value="saab" style={{fontWeight: "400", fontSize: "12px", lineHeight: "16px"}}>French</option>
  <option value="mercedes" style={{fontWeight: "400", fontSize: "12px", lineHeight: "16px"}}>Spanish</option>
  <option value="audi" style={{fontWeight: "400", fontSize: "12px", lineHeight: "16px"}} >Hindi</option>
</select>
    </span>
  </Item>
  <Item>
    <span style={{fontStyle: "normal", fontWeight:"800",fontSize: "30px",lineHeight: "41px"}}>
      SneakerHead
    </span>
  </Item>
  <Item>
  <ul style={{  listStyle: "none", display:"block" ,marginTop:"-4px"}}>
        <li style={{display: "inline-block" ,padding:"16px",fontStyle: "normal", fontWeight: "400", fontSize: "12px", lineHeight: "16px", textTransform: "uppercase", color: "#000000"}} class="home"><a href="#">Search</a></li>
        <li style={{display: "inline-block" ,padding:"16px",fontStyle: "normal", fontWeight: "400", fontSize: "12px", lineHeight: "16px", textTransform: "uppercase", color: "#000000"}}  class="tutorials"><a  href="#">
          
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2.1375C10.305 2.1375 11.3625 3.195 11.3625 4.5C11.3625 5.805 10.305 6.8625 9 6.8625C7.695 6.8625 6.6375 5.805 6.6375 4.5C6.6375 3.195 7.695 2.1375 9 2.1375ZM9 12.2625C12.3413 12.2625 15.8625 13.905 15.8625 14.625V15.8625H2.1375V14.625C2.1375 13.905 5.65875 12.2625 9 12.2625ZM9 0C6.51375 0 4.5 2.01375 4.5 4.5C4.5 6.98625 6.51375 9 9 9C11.4863 9 13.5 6.98625 13.5 4.5C13.5 2.01375 11.4863 0 9 0ZM9 10.125C5.99625 10.125 0 11.6325 0 14.625V18H18V14.625C18 11.6325 12.0038 10.125 9 10.125Z" fill="black"/>
</svg>


</a></li>
       <li style={{display: "inline-block" ,padding:"16px",fontStyle: "normal", fontWeight: "400", fontSize: "12px", lineHeight: "16px", textTransform: "uppercase", color: "#000000"}}  class="contact"><a href="#">
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18.975L8.975 18.05C7.20833 16.4334 5.75 15.0375 4.6 13.8625C3.45 12.6875 2.53333 11.6375 1.85 10.7125C1.16667 9.78752 0.6875 8.95002 0.4125 8.20002C0.1375 7.45002 0 6.69169 0 5.92502C0 4.42502 0.504167 3.17086 1.5125 2.16252C2.52083 1.15419 3.76667 0.650024 5.25 0.650024C6.2 0.650024 7.07917 0.875024 7.8875 1.32502C8.69583 1.77502 9.4 2.42502 10 3.27502C10.7 2.37502 11.4417 1.71252 12.225 1.28752C13.0083 0.862524 13.85 0.650024 14.75 0.650024C16.2333 0.650024 17.4792 1.15419 18.4875 2.16252C19.4958 3.17086 20 4.42502 20 5.92502C20 6.69169 19.8625 7.45002 19.5875 8.20002C19.3125 8.95002 18.8333 9.78752 18.15 10.7125C17.4667 11.6375 16.55 12.6875 15.4 13.8625C14.25 15.0375 12.7917 16.4334 11.025 18.05L10 18.975ZM10 17C11.6833 15.45 13.0708 14.1209 14.1625 13.0125C15.2542 11.9042 16.1208 10.9334 16.7625 10.1C17.4042 9.26669 17.8542 8.52502 18.1125 7.87502C18.3708 7.22502 18.5 6.57502 18.5 5.92502C18.5 4.82502 18.15 3.92086 17.45 3.21252C16.75 2.50419 15.85 2.15002 14.75 2.15002C13.9 2.15002 13.1083 2.41252 12.375 2.93752C11.6417 3.46252 11.05 4.20002 10.6 5.15002H9.375C8.94167 4.21669 8.35833 3.48336 7.625 2.95002C6.89167 2.41669 6.1 2.15002 5.25 2.15002C4.15 2.15002 3.25 2.50419 2.55 3.21252C1.85 3.92086 1.5 4.82502 1.5 5.92502C1.5 6.57502 1.62917 7.22919 1.8875 7.88752C2.14583 8.54586 2.59583 9.29586 3.2375 10.1375C3.87917 10.9792 4.75 11.95 5.85 13.05C6.95 14.15 8.33333 15.4667 10 17Z" fill="black"/>
</svg>
</a></li>
<li style={{display: "inline-block" ,padding:"16px",fontStyle: "normal", fontWeight: "400", fontSize: "12px", lineHeight: "16px", textTransform: "uppercase", color: "#000000"}}  class="contact"><a href="#">
<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4411 11C16.1862 11 16.8418 10.59 17.1796 9.97L20.7361 3.48C21.1036 2.82 20.6268 2 19.8718 2H5.16915L4.23533 0H0.986847V2H2.97369L6.55001 9.59L5.20889 12.03C4.48369 13.37 5.43737 15 6.94737 15H18.8684V13H6.94737L8.04014 11H15.4411ZM6.1129 4H18.183L15.4411 9H8.46731L6.1129 4ZM6.94737 16C5.85461 16 4.97047 16.9 4.97047 18C4.97047 19.1 5.85461 20 6.94737 20C8.04014 20 8.93422 19.1 8.93422 18C8.93422 16.9 8.04014 16 6.94737 16ZM16.8816 16C15.7888 16 14.9047 16.9 14.9047 18C14.9047 19.1 15.7888 20 16.8816 20C17.9743 20 18.8684 19.1 18.8684 18C18.8684 16.9 17.9743 16 16.8816 16Z" fill="black"/>
</svg>

</a></li>
      </ul>
  </Item>

</Grid>
<Grid justifyContent="center">
<Item>
  <ul  style={{ fontfamily: 'Open Sans', listStyle: "none", display:"block",marginTop:"-19px"}}>
        <li style={{display: "inline-block" ,padding:"16px",fontStyle: "normal", fontWeight: "400", fontSize: "12px", lineHeight: "16px", textTransform: "uppercase", color: "#000000"}} class="home"><a href="#">Home</a></li>
        <li style={{display: "inline-block" ,padding:"16px",fontStyle: "normal", fontWeight: "400", fontSize: "12px", lineHeight: "16px", textTransform: "uppercase", color: "#000000"}}  class="tutorials"><a href="#">Product</a></li>
        <li style={{display: "inline-block" ,padding:"16px",fontStyle: "normal", fontWeight: "400", fontSize: "12px", lineHeight: "16px", textTransform: "uppercase", color: "#000000"}}  class="about"><a href="#">New Arrivals</a></li>
        <li style={{display: "inline-block" ,padding:"16px",fontStyle: "normal", fontWeight: "400", fontSize: "12px", lineHeight: "16px", textTransform: "uppercase", color: "#000000"}}  class="news"><a href="#">MOST WANTED</a></li>
        <li style={{display: "inline-block" ,padding:"16px",fontStyle: "normal", fontWeight: "400", fontSize: "12px", lineHeight: "16px", textTransform: "uppercase", color: "#000000"}}  class="contact"><a href="#">SHOES</a></li>
      </ul>
  </Item>
</Grid>
</>




     );
}
 
export default Navbar;