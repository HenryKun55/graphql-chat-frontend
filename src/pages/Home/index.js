import React, { useState } from 'react';
import { Messages, SendMessage } from '../../components'

const Home = () => {
    return (
        <>
            <Messages />
            <SendMessage />
        </>
    )
}

export default Home