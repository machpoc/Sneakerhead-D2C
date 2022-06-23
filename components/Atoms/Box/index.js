import { Box } from 'native-base'
import React from 'react'



const BoxComponent=(props)=>{



    return(
   
      <Box {...props} >
    {   props.children}
   
    </Box>
    )
}

export default BoxComponent