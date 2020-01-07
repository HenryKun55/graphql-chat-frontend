import React, { useState } from 'react';
import { useInputChange } from '../../utils'
import { useMutation } from '@apollo/react-hooks';

import { messages } from '../../graphql/mutation'

import { 
    Container,
    Input,
    Button
} from './styles';


const SendMessage = () => {

    const [input, handleInputChange, clearInput] = useInputChange()

    const [addMessages, { data }] = useMutation(messages.addMessage)
    
    const handleSendMessage = (e) => {
        e.preventDefault()
        const message = input['message']
        addMessages({ variables: { author: 'Henry', title: 'A Big One', body: message } })
        clearInput('message')
    }

    return (
        <Container>
            <Input type="text" name='message' onChange={handleInputChange} value={input['message']} />
            <Button onClick={handleSendMessage}>Enviar</Button>
        </Container>
    )
};

export default SendMessage;
