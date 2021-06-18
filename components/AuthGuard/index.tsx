import React, { FC } from 'react';

import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import { MainWrapper } from '../MainWrapper';
import { MainTitle } from '../MainTitle';

export const AuthGuard: FC = ({ children }) => {
  const router = useRouter();
  const [session, isLoading] = useSession();

  if (!isLoading && !session) {
    router.push('/');
  }

  if (session) {
    return <>{children}</>;
  }

  return (
    <>
      <MainWrapper theme="center">
        <MainTitle>loading...</MainTitle>
      </MainWrapper>
    </>
  );
};
