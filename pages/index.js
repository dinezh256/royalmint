import React from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Landing from "../components/landing";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Royal Mint Menu</title>
        <meta
          title="description"
          content="The Royal Mint - a multicuisine restaurant in Baharagora"
        />
      </Head>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}
