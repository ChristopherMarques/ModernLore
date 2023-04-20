import "../styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/config/theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/providers/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
