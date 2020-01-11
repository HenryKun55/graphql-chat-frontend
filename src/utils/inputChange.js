import { useState } from 'react'

export const useInputChange = ({ isTyping }) => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    })
    isTyping && isTyping({ variables: { author: input['author'] || '' } })
  }

  const clearInput = async (type) => {
    await setInput({ ...input, [type]: '' });
  };

  return [input, handleInputChange, clearInput]
}