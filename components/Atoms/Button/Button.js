import React from 'react'

import { Button } from "native-base";



const ButtonComponent = (
    {
        size,
        colorScheme,
        direction,
        variant,
        isDisabled,
        isAttached,
        bg,
        children,
        hoverBg,
    width,
height }

) => {


    return (
        <>

            <Button
            width={width}
            height={height}
                size={size}
                colorScheme={colorScheme}
                direction={direction}
                variant={variant}
                isDisabled={isDisabled}
                isAttached={isAttached}
                bg={bg}
                _hover={{
                    bg: `${hoverBg}`
                  }}
                  _pressed={{
                    bg: "green.500"
                  }}
                >


                {children}

            </Button>
            
        </>

    )

}



ButtonComponent.defaultProps = {
    size: 'md',
    colorScheme: 'primary',
    direction: 'row',
    variant: 'solid',
    isDisabled: false,
    isAttached: false

}


export default ButtonComponent