import type { PlasmoMessaging } from "@plasmohq/messaging"
 
import { Storage } from "@plasmohq/storage"

const storage = new Storage()

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  
    const token = req.body.token as string;

    // Close the tab
    const auth_tab = await storage.get('auth_tab') as number;

    chrome.tabs.remove([auth_tab]);

  // save the jwt_token to local storage
    await storage.set('token', token);

    // unset the auth_tab
    await storage.set('auth_tab', null);

    res.send({
        message: 'success'
    })
}
 
export default handler