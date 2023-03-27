import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Beliefs from '../components/beliefs';

const Index = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <Beliefs />
    </Layout>
  );
};

export default Index;
