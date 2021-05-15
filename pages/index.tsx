// import Head from 'next/head';

import { Header } from '../components/Header';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { Button } from '../components/Button';

const Start = () => (
  <>
    <Header></Header>
    <MainWrapper theme="center">
      <MainTitle>hey! you have 10 ideas to create!</MainTitle>
      <Button href="/new">let's go!</Button>
    </MainWrapper>
  </>
);

export default Start;
