import classNames from 'classnames';
import { Fragment, useCallback, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import { Buttons } from './Buttons';
import { fields } from './fields';

import styles from './Form.module.scss';
import { SingleField } from './SingleField';

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
              <SingleField id={id} label={label} register={register} errors={errors} />

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
