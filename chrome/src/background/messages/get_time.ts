import type { PlasmoMessaging } from "@plasmohq/messaging"
 import { Storage } from "@plasmohq/storage";

const storage = new Storage();

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {

    // get current time
    const now = await storage.get('start_time') as number;
    
    if (!now) {
      res.send({
        error: 'Timer not started'
      })
      return;
    }
    
    const elapsed = new Date().getTime() - now;

  res.send({
    time: elapsed
  })
}
 
export default handler