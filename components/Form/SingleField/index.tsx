import classNames from 'classnames';
import { FC, KeyboardEvent } from 'react';

import { FormFieldType } from '../../../types/global';

import styles from './SingleField.module.scss';

export const SingleField: FC<FormFieldType> = ({ id, label, register, errors, goToNextField }) => {
  const name = `idea${id}`;

  const goToNextFieldOnEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (id !== 10) {
        goToNextField();
      }
    }
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        {...register(name, { required: true })}
        className={styles.input}
        data-testid={name}
        id={name}
        autoFocus={id === 1 ? false : true}
        aria-invalid={errors[name] ? 'true' : 'false'}
        onKeyDown={(event) => goToNextFieldOnEnter(event)}
      />
      {errors[name] && (
        <p role="alert" className={classNames(styles.error, 'errorFontColor')}>
          you need to write down this idea 🚀
        </p>
      )}
      {errors.form && (
        <p role="alert" className={classNames(styles.error, 'errorFontColor')}>
          {errors.form.message}
        </p>
      )}
    </>
  );
};
