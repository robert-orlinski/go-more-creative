import { useSelector } from 'react-redux';

import { Layout } from '../components/Layout';
import { AuthGuard } from '../components/AuthGuard';
import { MainWrapper } from '../components/MainWrapper';
import { MainTitle } from '../components/MainTitle';
import { Form } from '../components/Form';

import { StoreType } from '../store/types';

const Practice = () => {
  const currentTopic = useSelector((state: StoreType) => state.topics.currentTopic);

  return (
    <Layout pageName="practice 🔥">
      <AuthGuard>
        <MainWrapper theme="center">
          {currentTopic ? (
            <>
              <p className="marginBottomS">10 ideas for:</p>
              <MainTitle>{currentTopic.name}</MainTitle>
              <Form />
            </>
          ) : (
            <MainTitle className="errorFontColor">
              ahhhh! something went wrong :c there is ether database connection problem or there are
              simply no topics
            </MainTitle>
          )}
        </MainWrapper>
      </AuthGuard>
    </Layout>
  );
};

export default Practice;
