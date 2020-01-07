import { useState } from 'react'

export const useInputChange = () => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const clearInput = async (type) => {
    await setInput({ ...input, [type]: '' });
  };

  return [input, handleInputChange, clearInput]
}