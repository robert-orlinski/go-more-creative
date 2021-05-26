import { FC } from 'react';

import { FormFieldType } from '../../../types/global';

import styles from './SingleField.module.scss';

export const SingleField: FC<FormFieldType> = ({ id, label, register, errors }) => {
  const name = `idea${id}`;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        aria-invalid={errors[name] ? 'true' : 'false'}
        {...register(name, { required: true })}
        className={styles.input}
        id={name}
        autoFocus={id === 1 ? false : true}
      />
      {errors[name] && (
        <p role="alert" className={styles.error}>
          you need to write down this idea 🚀
        </p>
      )}
      {errors.form && (
        <p role="alert" className={styles.error}>
          {errors.form.message}
        </p>
      )}
    </>
  );
};
