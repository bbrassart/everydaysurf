import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import connectMongo from "../../../../utils/connectMongo";
import Session from "../../../../models/sessionModel";

export default withApiAuthRequired(
  /**
   * @param {import('next').NextApiRequest} req
   * @param {import('next').NextApiResponse} res
   */
  async function deleteSession(req, res) {
    try {
      await connectMongo();
      const { query } = req;
      const { id } = query;
      const deletedSession = await Session.deleteOne({_id: id});
      res.json({ deletedSession });

    } catch (error) {
      res.json({ error });
    }
  }
);
