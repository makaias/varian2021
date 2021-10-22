import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { PropsWithChildren, ReactElement } from "react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    primary: {
      50: "#ddf8ff",
      100: "#b5e5fa",
      200: "#8bd3f1",
      300: "#5fc1ea",
      400: "#36afe3",
      500: "#1c95c9",
      600: "#0e749e",
      700: "#015372",
      800: "#003347",
      900: "#00131c",
    },
    secondary: {
      50: "#defcff",
      100: "#b3f5ff",
      200: "#86e5fe",
      300: "#5bd1fd",
      400: "#3fbafc",
      500: "#3397e3",
      600: "#236bb1",
      700: "#14447e",
      800: "#001e4d",
      900: "#00081c",
    },
  },
});

export default function Chakra({
  children,
}: PropsWithChildren<{}>): ReactElement {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
