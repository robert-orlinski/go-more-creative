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
              <MainTitle>become an idea machine by writing 10 ideas a day 🔥</MainTitle>
              <p className="textCenter marginBottomL">
                here you can find dozens of topics that are waiting for you, make ideas related to them and train your creativity. more on this system in the famous <a href="https://jamesaltucher.com/blog/the-ultimate-guide-for-becoming-an-idea-machine/" target="_blank" rel="noreferrer">James Altucher's blog post</a>
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
