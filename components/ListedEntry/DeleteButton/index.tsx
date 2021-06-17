import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { deleteEntry } from '../../../actions/deleteEntry';

import { MongoIdType } from '../../../types/global';

import { ClassicButton } from '../../Button/Classic';

export const DeleteButton: FC<MongoIdType> = ({ _id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEntry(_id));
  };

  return <ClassicButton onClick={handleDelete}>delete entry</ClassicButton>;
};
