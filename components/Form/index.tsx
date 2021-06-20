import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useCallback, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import classNames from 'classnames';

import { addEntry } from '../../actions/addEntry';

import { EntryType } from '../../types/global';
import { StoreType } from '../../store/types';

import { Buttons } from './Buttons';
import { fields } from './fields';
import { SingleField } from './SingleField';

import styles from './Form.module.scss';

export const Form = () => {
  const topic = useSelector((state: StoreType) => state.topics.currentTopic);

  const [currentIdeaNumber, setCurrentIdeaNumber] = useState(1);

  const dispatch = useDispatch();

  const {
    setError,
    trigger,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: 'onChange',
  });

  const goToPrevField = useCallback(() => {
    setCurrentIdeaNumber(currentIdeaNumber - 1);
  }, [currentIdeaNumber]);

  const goToNextField = useCallback(async () => {
    const isFieldValid = await trigger(`idea${currentIdeaNumber}`);
    if (!isFieldValid) return;

    setCurrentIdeaNumber(currentIdeaNumber + 1);
  }, [currentIdeaNumber]);

  const saveFormResult: SubmitHandler<FieldValues> = async (data) => {
    const ideasArray = Object.entries(data);

    const entry: EntryType = {
      topic: topic,
      ideas: ideasArray,
      date: new Date().toISOString(),
    };

    dispatch(addEntry(entry, setError));
  };

  return (
    <form onSubmit={handleSubmit(saveFormResult)} className={styles.form}>
      {fields.map(({ id, label }) => (
        <Fragment key={`field${id}`}>
          {id === currentIdeaNumber && (
            <fieldset className={classNames('flex alignCenter directionColumn', styles.field)}>
              <SingleField
                id={id}
                label={label}
                register={register}
                errors={errors}
                goToNextField={goToNextField}
              />

              <Buttons
                ideaNumber={id}
                allIdeas={fields}
                goToPrevField={goToPrevField}
                goToNextField={goToNextField}
              />
            </fieldset>
          )}
        </Fragment>
      ))}
    </form>
  );
};
