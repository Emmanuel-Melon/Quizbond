import type { AppProps } from "next/app";
import {
  ChakraProvider,
  extendTheme,
  ColorModeProvider,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { client as apolloClient } from "@quizbond/lib/apollo";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
