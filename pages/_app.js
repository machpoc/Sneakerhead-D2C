import React from "react";
import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";
import useSWR, { SWRConfig } from "swr";
import { SessionProvider, useSession } from "next-auth/react";

import { ThemeProvider } from 'styled-components'
import {COLORS} from '../styles/theme/properties'
const theme = {
  colors: COLORS
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {



  return (
    <NativeBaseProvider >
        <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          // refreshInterval: 1000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </SWRConfig>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

export default MyApp;
