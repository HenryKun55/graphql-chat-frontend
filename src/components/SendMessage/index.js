import React, { useState, useEffect } from 'react';
import { useInputChange } from '../../utils'
import { useMutation, useSubscription } from '@apollo/react-hooks';

import { messages as MessagesMutation } from '../../graphql/mutation'
import { messages as MessagesSubscription } from '../../graphql/subscription'

import { 
    Container,
    SendMessageContainer,
    LabelUser,
    Input,
    Button,
    Typing
} from './styles';

const SendMessage = () => {

    const [isTyping] = useMutation(MessagesMutation.isTyping)
    const [input, handleInputChange, clearInput] = useInputChange({ isTyping })

    const [showLoading, setShowLoading] = useState(false)
    const [typing, setTyping] = useState('')

    // eslint-disable-next-line no-empty-pattern
    const [addMessages, { }] = useMutation(MessagesMutation.addMessage) 

    const { data, loading } = useSubscription(
        MessagesSubscription.typing,
        { variables: { author: input['author'] } }
    )

    useEffect(
        () => {
            if(!loading && data && data.typing !== input['author']) {
                console.log(data)
                setTyping(data.typing)
                setShowLoading(true)

                setTimeout(() => {
                    setShowLoading(false)
                }, 1000)
            }
        },
        [data, loading, input] 
    )

    const handleSendMessage = (e) => {
        e.preventDefault()
        const message = input['message']
        addMessages({ variables: { author: input['author'], title: 'Big Chat', body: message } })
        clearInput('message')
    }

    return (
        <Container>
            <LabelUser>Seu Nome: </LabelUser>
            <Input type="text" name='author' onChange={handleInputChange} value={input['author']} />
            <SendMessageContainer>
                <Input type="text" name='message' onChange={handleInputChange} value={input['message']} 
                    disabled={ input['author'] && input['author'].length > 3 ? false : true} 
                />
                <Button onClick={handleSendMessage}>Enviar</Button>
                
                {showLoading && <Typing>{`${typing} está digitando...`}</Typing> }
            </SendMessageContainer>
        </Container>
    )
};

export default SendMessage;
