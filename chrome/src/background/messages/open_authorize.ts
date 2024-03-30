import type { PlasmoMessaging } from "@plasmohq/messaging"
 
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {

  // Create a new tab with the authorize URL and search params
  const CLIENT_ID = process.env.PLASMO_PUBLIC_CLIENT_ID;
  const REDIRECT_URI = process.env.PLASMO_PUBLIC_REDIRECT_URI;
  const SCOPE = process.env.PLASMO_PUBLIC_SCOPE;
  const AUTHORIZE_URL = process.env.PLASMO_PUBLIC_AUTHORIZE_URL;
  const AUTHORIZE_URL_WITH_PARAMS = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
  
  const new_tab = chrome.tabs.create({ url: AUTHORIZE_URL_WITH_PARAMS });
  res.send({ new_tab });
}
 
export default handler