import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    400: "#291D89",
    300: "#4E67EB",
    200: "#F0F4FF",
    100: "#FFFFFF",
  },
};

export const theme = extendTheme({
  fonts: {
    body: "Arial, sans-serif",
  },
  colors,
});
