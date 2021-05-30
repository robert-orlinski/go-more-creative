import { NextRouter } from 'next/dist/client/router';
import { FieldValues, UseFormSetError } from 'react-hook-form';

import { AddingFormData } from './types';

export const addEntry = async (
  data: AddingFormData,
  router: NextRouter,
  setError: UseFormSetError<FieldValues>,
) => {
  const saveIdeas = await fetch('/api/add-entry', {
    method: 'POST',
    body: JSON.stringify({
      ...data,
      date: new Date(),
    }),
  });

  const areIdeasSaved = saveIdeas.ok;

  if (areIdeasSaved) {
    router.push('/');
  } else {
    setError('form', {
      type: 'server',
      message: "ideas weren't added. something went wrong 💔",
    });
  }
};
