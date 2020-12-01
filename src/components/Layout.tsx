// src/components/Layout.js
import React from 'react';
import { GlobalStyles } from 'twin.macro';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { IndexQueryQuery } from '../generated/graphql';

const Layout: React.FC = ({ children, ...rest }) => {
  const { site }: IndexQueryQuery = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          siteName
        }
      }
    }
  `);
  return (
    <div {...rest}>
      <Helmet>
        <title>{site?.siteMetadata?.siteName}</title>
      </Helmet>
      <GlobalStyles />
      {children}
    </div>
  );
};

export default Layout;
