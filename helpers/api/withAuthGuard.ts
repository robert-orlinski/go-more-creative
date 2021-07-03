import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

export const withAuthGuard =
  (handler: (req: NextApiRequest, res: NextApiResponse) => unknown) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (session) {
      return handler(req, res);
    } else {
      res.status(403).json({
        error: 'you have to be sign in to view the content on this page.',
      });
    }
  };
