import { useState } from "react"

import { H2, H3, Button, Subtitle, P } from '@leetup/shared-libraries';

import { User } from 'react-feather';

import '@leetup/shared-libraries/dist/styles.css';
import '~globals.css';
import Timer from "./widgets/timer";

import { sendToBackground } from "@plasmohq/messaging"

import { useStorage } from "@plasmohq/storage/hook";

function IndexPopup() {
  const [data, setData] = useState("")
  const [token, setToken] = useStorage('token', '')

  const openSignIn = () => {
    if (token) {
      setToken(null)
      return;
    }
    sendToBackground({ name: "open_authorize" })
  }
  
  return (
    <div
    className={'bg-background-accent'}
    >
      <div
      className={'w-full flex items-center justify-between p-4'}
      >
         <H3>Leetup Chrome Extension</H3>
         <div
         onClick={openSignIn}
         className={'w-10 h-10 rounded-full bg-white border border-black flex items-center justify-center'}>
            <User
            className={'w-6 h-6'}
            />
         </div>
      </div>

      <div
      
      className={'w-full bg-white p-4 flex flex-col gap-4'}
      >
        { token ? (
          <P>
            You are signed in
          </P>
        ) : (
          <P>
            You are not signed in
          </P>
        
        )}

        <Timer />
      </div>
    </div>
  )
}

export default IndexPopup
