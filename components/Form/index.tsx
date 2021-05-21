import classNames from 'classnames';
import { Fragment, useCallback, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import { Buttons } from './Buttons';
import { fields } from './fields';

import styles from './Form.module.scss';

export const Form = () => {
  const [currentIdeaNumber, setCurrentIdeaNumber] = useState(1);

  const {
    trigger,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const goToPrevField = useCallback(() => {
    setCurrentIdeaNumber(currentIdeaNumber - 1);
  }, [currentIdeaNumber]);

  const goToNextField = useCallback(async () => {
    const result = await trigger(`idea${currentIdeaNumber}`);
    if (!result) return;

    setCurrentIdeaNumber(currentIdeaNumber + 1);
  }, [currentIdeaNumber]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {fields.map(({ id, label }) => (
        <Fragment key={`field${id}`}>
          {id === currentIdeaNumber && (
            <div className={classNames('flex alignCenter directionColumn', styles.field)}>
              <label htmlFor={`idea${id}`}>{label}</label>
              <textarea
                {...register(`idea${id}`, { required: true })}
                className={styles.input}
                id={`idea${id}`}
              />
              {errors[`idea${id}`] && (
                <p className={styles.error}>you need to write down this idea 🚀</p>
              )}

              <Buttons
                ideaNumber={id}
                allIdeas={fields}
                goToPrevField={goToPrevField}
                goToNextField={goToNextField}
              />
            </div>
          )}
        </Fragment>
      ))}
    </form>
  );
};
