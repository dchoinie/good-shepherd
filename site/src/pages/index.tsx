import React, { useRef } from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Beliefs from '../components/beliefs';
import Ministries from '../components/ministries';
import Map from '../components/map';

const Index = (): JSX.Element => {
  const resultRef = useRef(null);
  return (
    <Layout heroLayout>
      <Hero resultRef={resultRef} />
      <Beliefs ref={resultRef} />
      <Ministries />
      <Map />
    </Layout>
  );
};

export default Index;
