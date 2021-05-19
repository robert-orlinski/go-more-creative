import classNames from 'classnames';
import { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import { FormInputsType, IdeaNumberType } from './types';

import styles from './Form.module.scss';
import { Buttons } from './Buttons';
import { fields } from './fields';

export const Form = () => {
  const [currentIdeaNumber, setCurrentIdeaNumber] = useState<IdeaNumberType>(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames('flex directionColumn alignCenter', styles.form)}
    >
      <fieldset className={classNames('flex', styles.fields)}>
        {fields.map(({ name, label }, i) => (
          <div className={styles.field}>
            <label htmlFor={name}>{label}</label>
            <textarea {...register(name, { required: true })} className={styles.input} />
            {errors[name] && <p className={styles.error}>you need to write down this idea!</p>}
          </div>
        ))}
      </fieldset>
      <Buttons ideaNumber={currentIdeaNumber} />
    </form>
  );
};
