import type { PlasmoMessaging } from "@plasmohq/messaging"
 import { Storage } from "@plasmohq/storage";

const storage = new Storage();

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {

  // get current time
  const now = new Date().getTime();
  
  // save the current time to local storage
  await storage.set('start_time', now);
}
 
export default handler