import React from "react"
import { Text } from "native-base"

const TextComponent=({
    children,
    fontSize
})=>{


    return(
        <Text fontSize={fontSize}>
            {children}
        </Text>
    )
}

export default TextComponent