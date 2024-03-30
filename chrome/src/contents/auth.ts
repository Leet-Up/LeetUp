import type { PlasmoMessaging } from "@plasmohq/messaging"
 
import { Storage } from "@plasmohq/storage"

const storage = new Storage()

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {

    console.log('wowowoww')
    const jwt_token = req.body.jwt_token;
    console.log(jwt_token);

  // save the jwt_token to local storage
    await storage.set('refresh', jwt_token);
}
 
export default handler