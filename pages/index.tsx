import React from 'react';

import { Layout } from '../components/Layout';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { LinkButton } from '../components/Button/Link';

const Start = () => (
  <Layout>
    <MainWrapper theme="center">
      {/* Todo: if today, ideas were fulfilled, show different title */}
      <MainTitle>hey! you have 10 ideas to create!</MainTitle>
      <LinkButton href="/practice">let's go!</LinkButton>
    </MainWrapper>
  </Layout>
);

export default Start;
