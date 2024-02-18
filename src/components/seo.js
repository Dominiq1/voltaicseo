import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, featuredImage, defaultImage }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <html lang="en" />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={featuredImage || defaultImage} /> */}
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      {"www.voltaicpowered.com" && <link rel="canonical" href={"www.voltaicpowered.com"} />} {/* Canonical tag added here */}
      {/* Add more meta tags as needed */}
    </Helmet>
  );
};

export default SEO;
