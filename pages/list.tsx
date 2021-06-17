import React from 'react';

import { Layout } from '../components/Layout';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { EntriesList } from '../components/EntriesList';

const List = () => (
  <Layout>
    <MainWrapper>
      <MainTitle>here you can check all your past ideas!</MainTitle>
      <EntriesList />
    </MainWrapper>
  </Layout>
);

export default List;
