import { useSelector } from 'react-redux';

import { Layout } from '../components/Layout';
import { AuthGuard } from '../components/AuthGuard';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { Form } from '../components/Form';

import { StoreType } from '../store/types';

const Practice = () => {
  const { name: topicName } = useSelector((state: StoreType) => state.topics.currentTopic);

  return (
    <Layout pageName="practice 🔥">
      <AuthGuard>
        <MainWrapper theme="center">
          <p className="marginBottomS">10 ideas for:</p>
          <MainTitle>{topicName}</MainTitle>
          <Form />
        </MainWrapper>
      </AuthGuard>
    </Layout>
  );
};

export default Practice;
