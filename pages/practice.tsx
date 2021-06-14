import { useSelector } from 'react-redux';

import { Nav } from '../components/Nav';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';

import { TopicsStateType } from '../store/types';

const Start = () => {
  const { name: topicName } = useSelector((state: TopicsStateType) => state.topics.currentTopic);

  return (
    <>
      <Nav />
      <MainWrapper theme="center">
        <MainTitle>
          tell me your 10 ideas for
          <span className="highlight">{` ${topicName}`}</span>
        </MainTitle>
        <Form />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Start;
