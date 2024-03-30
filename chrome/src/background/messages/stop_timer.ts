import type { PlasmoMessaging } from "@plasmohq/messaging"
 import { Storage } from "@plasmohq/storage";

const storage = new Storage();

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  
    await storage.set('time_started', false);
    await storage.set('start_time', 0);

    res.send({
        message: 'success'
    })
}
 
export default handler