import { Html, Head, Main, NextScript } from 'next/document'
import { NavBar } from '../components/NavBar'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}