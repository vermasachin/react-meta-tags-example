import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sachin Verma</title>
        <meta
          name="description"
          content="Sachin Verma's personal site and blog"
        />
      </Helmet>
      <h1>Home</h1>
    </>
  );
}
