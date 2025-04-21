import "../styles/globals.scss"
import type { AppProps } from 'next/app'

if (typeof window === "undefined") {
  global.Audio = function () {} as any
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}