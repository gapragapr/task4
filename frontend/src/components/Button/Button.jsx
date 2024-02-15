import React from 'react'

const Button = ({content, onClickHandler, isLoading}) => {
  return (
    <button onClick={onClickHandler} disabled={isLoading} className='bg-sky-500 text-white text-bold w-full rounded-lg p-2 disabled:bg-gray-500 disabled:cursor-wait'>{content}</button>
  )
}

export default Button