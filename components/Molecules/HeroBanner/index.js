import React from 'react';
import Grid from '../../Atoms/Grid';


function HeroBanner(props) {
    return (

<Grid {...props} >

{props.children}

</Grid>


     );
}

export default HeroBanner;