import type { PlasmoCSConfig } from "plasmo"
 
import { relayMessage } from "@plasmohq/messaging"
 
export const config: PlasmoCSConfig = {
  matches: ["https://plasmo.com/*"] // Only relay messages from this domain
}
 
console.log('test');

relayMessage({
  name: "ping"
})