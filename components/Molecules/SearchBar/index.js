import React from 'react';
import { StyledInput } from './SearchBar.styled.js';
const SearchBar = () => {
    return ( <>
    
    <div style={{background:"transparent",border:"none",width: "100px",height: "30px",borderRadius:"25px",
background:" #F0F1F1",height:"40px",width:"132px"}}>

{/* '%' values needs to convert to 'rem' */}

<img style={{margin: "8% 0% 0% 6%"}} height={21} src="/images/refreshed/search.svg"/>
<StyledInput placeholder="SEARCH"/>
    </div>
    </> );
}
 
export default SearchBar;