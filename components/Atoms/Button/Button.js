import React from 'react'

import { Button } from "native-base";
import { withTheme } from 'styled-components';



const  ButtonComponent = (


    {
      onPress,
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
marginBottom,
hoverTextColor
}

) => {
    const myRef = React.useRef({});
    React.useEffect(() => {
      const styleObj = {
        marginTop: marginTop,
        marginBottom:marginBottom,
        borderColor:`var(--sneakerhead-red)`,
        // backGroundColor: fill ? `var(--sneakerhead-red)`:"transparent",
        borderWidth: 1,
        borderRadius: '30px',
      }; //@ts-ignore
      const className="btn-basic"
  
      myRef.current.setNativeProps({
        style: styleObj,
        className:className
      });
    }, [myRef]);

    return (
        <>

            <Button
            onPress={onPress}
             ref={myRef}
            width={width}
            height={height}
                size={size}
                colorScheme={colorScheme}
                direction={direction}
                variant={variant}
                isDisabled={isDisabled}
                isAttached={isAttached}
                bg={fill ? `${bg}`:"transparent"}
                _text={{
                    color: fill?"#ffffff":`var(--sneakerhead-red)`
                  }}
                _hover={{
                    bg: fill?`${hoverBg}`:"#ffffff",
                    _text: {    color: fill? `${hoverTextColor}`:`var(--sneakerhead-red)` },
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


export default withTheme(ButtonComponent)