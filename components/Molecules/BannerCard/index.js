import React from 'react'

import { Box, Button, Center } from "native-base";
import ButtonComponent from '../../Atoms/Button/Button';



const BannerCardComponent = (
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
            <ButtonComponent
                // size="xs"
                width={100}
                height={10}
                bg="#727272"
                hoverBg="#727245"
            >
                {buttonName}

            </ButtonComponent>
        </Box>

    )

}



BannerCardComponent.defaultProps = {


}


export default BannerCardComponent