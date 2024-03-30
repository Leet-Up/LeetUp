import type { PlasmoMessaging } from "@plasmohq/messaging"
 
import { Storage } from "@plasmohq/storage"

const storage = new Storage()

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {

    const refresh = req.body.refresh as string;
    const access = req.body.access as string;

  // save the jwt_token to local storage
    await storage.set('refresh', refresh);
    await storage.set('access', access);

    res.send({
        message: 'success'
    })
}
 
export default handler