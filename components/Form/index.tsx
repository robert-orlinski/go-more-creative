import classNames from 'classnames';
import { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import { Buttons } from './Buttons';
import { fields } from './fields';

import styles from './Form.module.scss';

export const Form = () => {
  const [currentIdeaNumber, setCurrentIdeaNumber] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FieldValues>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {fields.map(({ id, label }) => (
        <>
          {id === currentIdeaNumber && (
            <div
              className={classNames('flex alignCenter directionColumn', styles.field)}
              key={`field${id}`}
            >
              <label htmlFor={`field${id}`}>{label}</label>
              <textarea
                {...register(`field${id}`, { required: true })}
                className={styles.input}
                id={`field${id}`}
              />
              {errors[`field${id}`] && (
                <p className={styles.error}>you need to write down this idea!</p>
              )}

              <Buttons ideaNumber={currentIdeaNumber} setIdeaNumber={setCurrentIdeaNumber} />
            </div>
          )}
        </>
      ))}
    </form>
  );
};
