import type { PlasmoMessaging } from "@plasmohq/messaging"
 
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = 'pong'

  console.log('pong');
 
  res.send({
    message
  })
}
 
export default handler