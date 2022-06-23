import React from 'react'

import { Box, Button, Center } from "native-base";
import ButtonComponent from '../../Atoms/Button/Button';



const MarketingComponent = (
    { heading,
        description,
        buttonName
    }

) => {


    return (

        <Box>
            <Box>
                <h1>{heading}</h1>
                <p>{description}</p>
            </Box>
            <a href="/home">Click</a>
        </Box>

    )

}



MarketingComponent.defaultProps = {


}


export default MarketingComponent