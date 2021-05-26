import { NextRouter } from 'next/dist/client/router';
import { FieldValues, UseFormSetError } from 'react-hook-form';

export const addEntry = async (
  data: object,
  router: NextRouter,
  setError: UseFormSetError<FieldValues>,
) => {
  const ideasArray = Object.values(data);

  const saveIdeas = await fetch(window.location.origin + '/api/add-entry', {
    method: 'POST',
    body: JSON.stringify({
      ideas: ideasArray,
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
