import React, { ReactElement } from 'react';
import tw, { styled } from 'twin.macro';
import Layout from '../components/Layout';

const Container = styled.div`
  ${tw`bg-gray-100 w-full`}
  padding: 15px;
`;

export default function Home(): ReactElement {
  return (
    <Layout>
      <Container>Hello world!</Container>
    </Layout>
  );
}
