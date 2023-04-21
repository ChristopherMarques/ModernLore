import "../styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/config/theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/providers/AuthContext";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <DefaultSeo {...SEO} />
        <AuthProvider>
          <ChakraProvider theme={theme}>
            {!router.pathname.includes("/Admin") && <Header />}
            <Component {...pageProps} />
            {!router.pathname.includes("/Admin") && <Footer />}
          </ChakraProvider>
        </AuthProvider>
      </>
    );
  }
}

export default MyApp;
