import React from 'react'

import { Box, Button, Center,Text } from "native-base";
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
            <Text fontSize="30px">{heading}</Text>
               <Text fontSize="var(--fs-sneakerhead-400)">{description}</Text>
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