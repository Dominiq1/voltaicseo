import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Add more meta tags as needed */}
    </Helmet>
  );
};

export default SEO;
