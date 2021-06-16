import { Entry } from '../../../helpers/api/Models/Entry';
import { useDatabase } from '../../../helpers/api/useDatabase';
import { useRequestMethod } from '../../../helpers/api/useRequestMethod';

const deleteEntry = useRequestMethod({
  DELETE: useDatabase(async (req, res) => {
    const { _id } = JSON.parse(req.body);
    await Entry.deleteOne({ _id });

    res.status(200).send('entry deleted');
  }),
});

export default deleteEntry;
