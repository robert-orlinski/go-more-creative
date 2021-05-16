// import Head from 'next/head';

import { Nav } from '../components/Nav';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

const Start = () => (
  <>
    <Nav />
    <MainWrapper theme="center">
      <MainTitle>hey! you have 10 ideas to create!</MainTitle>
      <Button href="/practice">let's go!</Button>
    </MainWrapper>
    <Footer />
  </>
);

export default Start;
