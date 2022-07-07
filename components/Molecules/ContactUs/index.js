import React from 'react';
import {StyledContactUsContent,StyledContactUsHeader} from './ContactUs.styled';
const ContactUs = () => {
    return ( <>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
    <StyledContactUsHeader>
    Need help? Contact us
    </StyledContactUsHeader>

    <StyledContactUsContent>
    Monday - Saturday 10:00AM-6:00PM 
    </StyledContactUsContent>
    </div>
    
   

    </> );
}
 
export default ContactUs;