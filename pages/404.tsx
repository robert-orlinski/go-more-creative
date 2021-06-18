import React from 'react';

import { Layout } from '../components/Layout';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { LinkButton } from '../components/Button/Link';

const List = () => (
  <Layout>
    <MainWrapper theme="center">
      <MainTitle>oh, 404</MainTitle>
      <p className="textCenter marginBottomL">
        you've got a bit lost, but don't worry -
        <br /> you can always go back to the homepage
      </p>
      <LinkButton href="/">i'm going!</LinkButton>
    </MainWrapper>
  </Layout>
);

export default List;
