import React from 'react'
import { useNavigate } from 'react-router-dom'

const TextLink = ({children, path}) => {
    const navigate= useNavigate()

    const onClickTextLink = () => {
        navigate(`../${path}`)
    }

  return (
    <span className='text-sky-500 cursor-pointer' onClick={onClickTextLink}>{children}</span>
  )
}

export default TextLink