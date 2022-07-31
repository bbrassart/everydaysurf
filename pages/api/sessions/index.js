import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

import connectMongo from "../../../utils/connectMongo";
import Session from "../../../models/sessionModel";

export default withApiAuthRequired(
  /**
   * @param {import('next').NextApiRequest} req
   * @param {import('next').NextApiResponse} res
   */
  async function getSessions(req, res) {
    const session = getSession(req, res);
    const { user } = session;
    const { sub } = user;
    try {
      await connectMongo();
      const sessions = await Session.find({userId: sub});
      res.json({ sessions });
    } catch (error) {
      res.json({ error });
    }
  }
);