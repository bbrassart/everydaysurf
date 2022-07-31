import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import connectMongo from "../../../utils/connectMongo";
import Session from "../../../models/sessionModel";

export default withApiAuthRequired(
  /**
   * @param {import('next').NextApiRequest} req
   * @param {import('next').NextApiResponse} res
   */
  async function addSession(req, res) {
    try {
      await connectMongo();
      const session = await Session.create(req.body);
      res.json({ session });
    } catch (error) {
      res.json({ error });
    }
  }
);
