import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Beliefs from '../components/beliefs';
import DivineService from '../components/divineService';
import WorshipSchedule from '../components/worshipSchedule';
import Ministries from '../components/ministries';

const Index = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <Beliefs />
      <DivineService />
      <WorshipSchedule />
      <Ministries />
    </Layout>
  );
};

export default Index;
