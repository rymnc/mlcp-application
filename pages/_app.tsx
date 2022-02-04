import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Auth } from "@supabase/ui";
import Layout from "../components/Layout";
import { supabase } from "../supabase";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth.UserContextProvider>
  );
}

export default MyApp;
