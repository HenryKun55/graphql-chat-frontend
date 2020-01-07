import React, { useState, useEffect } from 'react';
import { Container, Message, Loading } from './styles';

import { useQuery, useSubscription } from '@apollo/react-hooks'

import { messages as MessagesQuery } from '../../graphql/query'
import { messages as MessagesSubscription } from '../../graphql/subscription'

const Messages = () => {

    const [messages, setMessages] = useState([])

    const { data, loading } = useQuery(MessagesQuery.getMessages)
    const { data: newMessage } = useSubscription(MessagesSubscription.newMessage)

    useEffect(() => {
        if(!loading) {
            setMessages(data.messages)
        }
    }, [data])

    useEffect(() => {
        if(newMessage && newMessage.message ) {
            setMessages([ ...messages, newMessage.message.data ])
        }
    }, [newMessage])

    return (
        <Container>
            {loading && <Loading />}
            {messages && messages.map( (message, key) => {
                return <Message key={`${message.title}-${key}`}>{`${message.author}: ${message.body}`}</Message>
            })}
        </Container>
    )
}

export default Messages