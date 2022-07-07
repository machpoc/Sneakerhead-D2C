import React from 'react'

import { Button } from "native-base";



const  ButtonComponent = (


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
height,
radius,
fill,marginTop,
marginBottom
}

) => {
    const myRef = React.useRef({});
    React.useEffect(() => {
      const styleObj = {
        marginTop: marginTop,
        marginBottom:marginBottom,
        borderColor:"rgba(211,20,36,1.00)",
        // backGroundColor: fill ? "rgba(211,20,36,1.00)":"transparent",
        borderWidth: 1,
        borderRadius: '30px',
      }; //@ts-ignore
  
      myRef.current.setNativeProps({
        style: styleObj
      });
    }, [myRef]);

    return (
        <>

            <Button
             ref={myRef}
            width={width}
            height={height}
                size={size}
                colorScheme={colorScheme}
                direction={direction}
                variant={variant}
                isDisabled={isDisabled}
                isAttached={isAttached}
                bg={fill?bg:"transparent"}
                _text={{
                    color: fill?"#ffffff":"rgba(211,20,36,1.00)"
                  }}
                _hover={{
                    bg: fill?`${hoverBg}`:"#ffffff"
                  }}
                  _pressed={{
                    bg: fill?`#d31423c7`:"#f7f7f7"
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