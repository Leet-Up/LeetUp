import type { PlasmoMessaging } from "@plasmohq/messaging"
 import { Storage } from "@plasmohq/storage";

const storage = new Storage();

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {

  
  // get current time

  const time = new Date().getTime();
  
  // save the current time to local storage
  await storage.set('time_started', true);
  await storage.set('start_time', time);
  // create end time with 15 minutes
  await storage.set('end_time', time + 15 * 60 * 1000);

  res.send({
    message: 'success'
  })
}
 
export default handler