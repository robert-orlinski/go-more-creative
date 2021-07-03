import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { deleteEntry } from '../../../actions/deleteEntry';

import { MongoIdType, TestIdType } from '../../../types/global';

import { ClassicButton } from '../../Button/Classic';

export const DeleteButton: FC<MongoIdType & TestIdType & { pointsToRemove: number }> = ({
  _id,
  pointsToRemove,
  testId,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEntry(_id, pointsToRemove));
  };

  return (
    <ClassicButton onClick={handleDelete} testId={testId}>
      delete entry
    </ClassicButton>
  );
};
