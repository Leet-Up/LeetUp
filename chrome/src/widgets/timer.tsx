import React, { useState } from 'react';

import { H3, Button } from '@leetup/shared-libraries';

export default function Timer ()
{
    const [started, setStarted] = useState(false);
    const [time, setTime] = useState(0);

    return (
        <div
        className={'w-full p-2 border rounded-xl'}
        >
            <H3>Timer</H3>

            <hr
            className={'my-2'}
            />

            <div
            className={'flex gap-4 items-center justify-between'}
            >
                <div
                className={'w-20 h-20 bg-neutral-200 rounded-xl flex items-center justify-center'}
                >
                    00:00
                </div>
                { `${started}`}
                <div
                className={'flex flex-col gap-2'}
                >
                    <Button
                    onClick={() => setStarted(true)}
                    >
                        Start
                    </Button>
                    <Button
                    variant={'outline'}
                    onClick={() => setStarted(false)}
                    >
                        Start
                    </Button>
                </div>
            
            </div>
        </div>
    );
}