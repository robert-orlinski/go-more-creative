import { FC } from 'react';

import { FormFieldType } from '../types';

import styles from './SingleField.module.scss';

export const SingleField: FC<FormFieldType> = ({ id, label, register, errors }) => {
  const name = `idea${id}`;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea {...register(name, { required: true })} className={styles.input} id={name} />
      {errors[name] && <p className={styles.error}>you need to write down this idea 🚀</p>}
    </>
  );
};