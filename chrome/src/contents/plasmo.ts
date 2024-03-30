import type { PlasmoCSConfig } from "plasmo"
 
import { relayMessage } from "@plasmohq/messaging"
 
export const config: PlasmoCSConfig = {
  matches: ["http://localhost:3000/*"] // Only relay messages from this domain
}
 
relayMessage({
  name: "authorize"
})