import React, { useContext, useEffect } from 'react'
import { Input } from '@chakra-ui/react'
import CryptoContext from '../context/CryptoContext'


function InputForm() {
  
  const { searchCoins, input, setInput} = useContext(CryptoContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    searchCoins(input)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <Input
        variant='filled' 
        value={input}
        placeholder='Filled'
        onChange={e=> setInput(e.target.value)} />
        </form>
    </div>
  )
}

export default InputForm