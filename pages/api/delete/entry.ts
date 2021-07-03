import { Entry } from '../../../helpers/api/Models/Entry';
import { withDatabase } from '../../../helpers/api/withDatabase';
import { withRequestMethod } from '../../../helpers/api/withRequestMethod';

const deleteEntry = withRequestMethod({
  DELETE: withDatabase(async (req, res) => {
    const { _id } = JSON.parse(req.body);
    await Entry.deleteOne({ _id });

    res.status(200).json({ message: 'entry deleted' });
  }),
});

export default deleteEntry;
