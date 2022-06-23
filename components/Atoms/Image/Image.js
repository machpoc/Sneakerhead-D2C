import React, { Children } from 'react'

import { Button, Image } from "native-base";



const ImageComponent = (
    {
        source,
        width,
        height,
        children
    ,
    size,
    alt
    }

) => {


    return (
        <>

            <Image
            alt={alt}
                source={source}   
                width={width}
                height={height}
                size={size}
            >

                {children}

            </Image>
            
        </>

    )

}



ImageComponent.defaultProps = {
  

}


export default ImageComponent