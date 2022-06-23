import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";


const theme = extendTheme({
    colors: {
      // Add new color
      "haneesh":"#234324",
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
    fontSizes: {
        "2xs": 10,
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        "2xl": 24,
        "3xl": 30,
        "4xl": 36,
        "5xl": 48,
        "6xl": 60,
        "7xl": 72,
        "8xl": 96,
        "9xl": 128,
      },
  });

  export {theme}