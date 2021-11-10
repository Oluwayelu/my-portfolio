import Layout from "../layout";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
