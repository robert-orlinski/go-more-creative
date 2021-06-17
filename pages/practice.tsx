import React from 'react';

import { useSelector } from 'react-redux';

import { Layout } from '../components/Layout';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { Form } from '../components/Form';

import { TopicsStateType } from '../store/types';

const Practice = () => {
  const { name: topicName } = useSelector((state: TopicsStateType) => state.topics.currentTopic);

  return (
    <Layout>
      <MainWrapper theme="center">
        <MainTitle>
          tell me your 10 ideas for
          <span className="highlight">{` ${topicName}`}</span>
        </MainTitle>
        <Form />
      </MainWrapper>
    </Layout>
  );
};

export default Practice;
