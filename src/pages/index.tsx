import React, { ReactElement } from "react"
import Layout from "../components/Layout"
import { graphql, PageProps } from "gatsby"
import tw, { styled } from "twin.macro"

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

const Container = styled.div`
  ${tw`bg-gray-100 w-full`}
  padding: 15px;
`

export default function Home({ data }: IndexPageProps): ReactElement {
  return (
    <Layout>
      <Container>Hello world!</Container>
    </Layout>
  )
}
