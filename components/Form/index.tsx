import classNames from 'classnames';
import { Fragment, useCallback, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import { addEntry } from '../../requests/addEntry';

import { Buttons } from './Buttons';
import { fields } from './fields';
import { SingleField } from './SingleField';

import styles from './Form.module.scss';

export const Form = () => {
  const router = useRouter();
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

  const saveFormResult: SubmitHandler<FieldValues> = (data) => {
    const ideasArray = Object.entries(data);

    // TODO: topic from api
    addEntry({ topic: 'the morning routine', ideas: ideasArray }, router, setError);
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
