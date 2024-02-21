import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, featuredImage, defaultImage, slug }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <html lang="en" />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="theme-color" content="black"/>

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={featuredImage || defaultImage} /> */}
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={`www.voltaicpowered.com${slug}`} />
      <meta name="robots" content="index, follow" />

 {/* Add more meta tags as needed */}
    </Helmet>
  );
};

export default SEO;
