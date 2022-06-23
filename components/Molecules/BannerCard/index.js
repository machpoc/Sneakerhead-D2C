import React from 'react'

import { Box, Button, Center } from "native-base";
import ButtonComponent from '../../Atoms/Button/Button';



const BannerCardComponent = (
    { heading,
        description,
        buttonName,
        buttonBg,
        hoverBg
    }

) => {


    return (

        <Box>
            <Box marginLeft="4rem">
                <h1>{heading}</h1>
                <p>{description}</p>
                <ButtonComponent
                // size="xs"
                width={100}
                height={10}
                bg={buttonBg}
                hoverBg={hoverBg}
                fill={true}
            >
                {buttonName}

            </ButtonComponent>
            </Box>
           
        </Box>

    )

}



BannerCardComponent.defaultProps = {


}


export default BannerCardComponent