import React, { useState, useEffect } from 'react';

import { useStorage } from "@plasmohq/storage/hook"

import { H3, Button } from '@leetup/shared-libraries';

import { sendToBackground } from '@plasmohq/messaging';


export default function Timer ()
{
    const [start_time] = useStorage<number>('start_time')
    const [time, setTime] = useState<number>(0)
    const [started, setStarted] = useStorage<boolean>('started', (v) => v || false)

    const startTimer = async () => {
        await sendToBackground({ name: "start_timer" })
        setStarted(true)
    }

    useEffect(() => {
        if (started) {
            const interval = setInterval(() => {
                setTime((new Date().getTime() - start_time) / 1000)
            }, 100)
            return () => clearInterval(interval)
        }
    }, [started])

    return (
        <div
        className={'w-full p-4 border rounded-xl'}
        >
            <H3>Timer</H3>

            <hr
            className={'mt-2 mb-4'}
            />

            <div
            className={'flex gap-4 items-center justify-between'}
            >
                <div
                className={'w-20 h-20 bg-neutral-200 rounded-xl flex items-center justify-center'}
                >
                    {`${time}`}
                </div>
                { `${started}`}
                <div
                className={'flex flex-col gap-2'}
                >
                    <Button
                    onClick={startTimer}
                    >
                        Start
                    </Button>
                    <Button
                    variant={'outline'}
                    onClick={() => setStarted(false)}
                    >
                        Stop
                    </Button>
                </div>
            
            </div>
        </div>
    );
}