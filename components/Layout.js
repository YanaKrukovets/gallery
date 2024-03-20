/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import React, { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(
      typeof window !== "undefined"
        ? window.location.protocol + "//" + window.location.hostname
        : ""
    );
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <title>Online Art Gallery by Yana Krukovets</title>
        <meta
          name="description"
          content="Online Art Gallery by Yana Krukovets. Acrylic, watercolor artworks. Abstract space nature wall art, mini art"
        />

        <meta
          property="og:url"
          content="https://yanakrukovets-artgallery.ca/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online Art Gallery by Yana Krukovets"
        />
        <meta
          property="og:description"
          content="Acrylic, watercolor abstract space nature artworks."
        />
        <meta property="og:image" content="../images/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="yanakrukovets-artgallery.ca" />
        <meta
          property="twitter:url"
          content="https://yanakrukovets-artgallery.ca/"
        />
        <meta
          name="twitter:title"
          content="Online Art Gallery by Yana Krukovets"
        />
        <meta
          name="twitter:description"
          content="Acrylic, watercolor abstract space nature artworks."
        />
        <meta
          name="twitter:image"
          content="https://yanakrukovets-artgallery.ca/images/og-image.webp"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://yanakrukovets-artgallery.ca/apple-touch-icon.png"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="https://yanakrukovets-artgallery.ca/favicon.ico"
        />
      </Head>

      <main className={`verflow-x-hidden w-full`}>
        <Header />
        <div id="content" className="max-w-inner xxxl:px-0">
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}
