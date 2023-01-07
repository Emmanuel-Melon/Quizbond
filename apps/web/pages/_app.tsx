import type { AppProps } from "next/app";
import {
  ChakraProvider,
  extendTheme,
  ColorModeProvider,
  theme as chakraTheme,
} from "@chakra-ui/react";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
