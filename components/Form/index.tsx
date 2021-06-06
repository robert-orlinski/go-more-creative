import { Types } from 'mongoose';
import { useDispatch } from 'react-redux';
import { Fragment, useCallback, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import classNames from 'classnames';

import { addEntry } from '../../requests/addEntry';
import { add } from '../../store/entriesSlice';

import { Buttons } from './Buttons';
import { fields } from './fields';
import { SingleField } from './SingleField';

import styles from './Form.module.scss';
import { EntryType } from '../../types/global';

export const Form = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [currentIdeaNumber, setCurrentIdeaNumber] = useState(1);

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
    const newObjectId = Types.ObjectId();
    const ideasArray = Object.entries(data);

    const entry: EntryType = {
      _id: newObjectId,
      // TODO: get topic from db
      topic: 'the morning routine',
      ideas: ideasArray,
      date: new Date().toISOString(),
    };

    await addEntry(entry, router, setError);

    const isEntryAddedToDatabase = !errors.form;
    if (isEntryAddedToDatabase) {
      const entryToAddToStore = {
        ...entry,
        _id: entry._id.toString(),
      };

      dispatch(add(entryToAddToStore));
    }
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
