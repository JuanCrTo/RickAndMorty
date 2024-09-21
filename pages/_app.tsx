import React from "react";
import locale from 'antd/lib/locale/es_ES'
import type { AppContext } from 'next/app'
import type { AppProps } from "next/app";
import '@/styles/globals.scss'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
