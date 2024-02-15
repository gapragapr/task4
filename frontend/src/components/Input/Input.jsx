import React from 'react'

const Input = ({placeholder, onChangeHandler, type}) => {
  return (
    <input onChange={onChangeHandler} className='w-full bg-gray-100 rounded p-2' type={type} placeholder={placeholder} />
  )
}

export default Input