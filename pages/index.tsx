import React from 'react';
import { signIn, useSession } from 'next-auth/client';

import { Layout } from '../components/Layout';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { LinkButton } from '../components/Button/Link';
import { ClassicButton } from '../components/Button/Classic';

const Start = () => {
  const [session, isLoading] = useSession();

  return (
    <>
      {!isLoading && (
        <Layout>
          {session ? (
            <MainWrapper theme="center">
              <MainTitle>hey! you have 10 ideas to create!</MainTitle>
              <LinkButton href="/practice">let's go!</LinkButton>
            </MainWrapper>
          ) : (
            <MainWrapper theme="center">
              <MainTitle>gamified app that trains your creativity</MainTitle>
              <p className="marginBottomL">
                you can log in and start to fulfilling 10 ideas for various topics - every day!
              </p>
              <ClassicButton onClick={() => signIn()}>sign me in!</ClassicButton>
            </MainWrapper>
          )}
        </Layout>
      )}
    </>
  );
};

export default Start;
