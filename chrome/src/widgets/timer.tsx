import React, { useState, useEffect } from 'react';

import { useStorage } from "@plasmohq/storage/hook"

import { H3, Button } from '@leetup/shared-libraries';

import { sendToBackground } from '@plasmohq/messaging';


export default function Timer ()
{
    const [time, setTime] = useState<number>(0)

    const [timeStarted, setTimeStarted] = useStorage<boolean>('time_started', false)
    const [start_time, setStartTime] = useStorage<number>('start_time', (v) => v || new Date().getTime())
    const [end_time, setEndTime] = useStorage<number>('end_time', (v) => v || new Date().getTime())

    const startTimer = async () => {
        await sendToBackground({ name: "start_timer" })
        await setStartTime(new Date().getTime())
        await setEndTime (new Date().getTime() + 15 * 60 * 1000)
    }

    const stopTimer = async () => {
        await sendToBackground({ name: "stop_timer" })
    }

    useEffect(() => {
        if (timeStarted) {
            const now = new Date().getTime()
            setEndTime(now + 15 * 60 * 1000)
            const interval = setInterval(() => {
                const time_diff = end_time - new Date().getTime() 
                setTime(Math.max(0, time_diff / 1000)); // Ensure time doesn't go below 0
            }, 100)
            return () => clearInterval(interval)
        }
        else {
            setTime(15 * 60) 
        }
    }, [timeStarted])

    return (
        <div
        className={'w-full p-4 border rounded-xl'}
        >
            { `${start_time} - ${end_time}`}
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
                    { `${time.toFixed(1)}` }
                </div>
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
                    onClick={stopTimer}
                    >
                        Stop
                    </Button>
                </div>
            
            </div>
        </div>
    );
}