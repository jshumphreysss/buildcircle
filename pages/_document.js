// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Press Start 2P Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gray-200 text-black font-press-start">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
