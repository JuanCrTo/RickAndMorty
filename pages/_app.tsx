import React from "react";
import "@/styles/index.scss"
import locale from 'antd/lib/locale/es_ES'
import type { AppContext } from 'next/app'
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
