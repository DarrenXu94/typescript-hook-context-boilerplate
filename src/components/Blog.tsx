import React, { useState } from 'react'

import { useCountState, useCountDispatch } from "../store/mainStore";

export default function Blog({ item }) {
    const [countLocal, setCount] = useState(0);

    const { count } = useCountState()
    const dispatch = useCountDispatch()
    return (
        <div>
            <>
                Blog Item
                {item.title}
                <p>You clicked {countLocal} times</p>
                <button onClick={() => setCount(countLocal + 1)}>
                    Click me
                    </button>

                <button onClick={() => dispatch({ type: 'increment', value: countLocal })}>
                    {/* <button onClick={() => dispatch({ count: 3 })}> */}
                    Click me global
                </button>
                <div>{`The current count is ${count}`}</div>
            </>
        </div>
    )
}
