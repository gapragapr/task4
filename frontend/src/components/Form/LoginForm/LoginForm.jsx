import Input from '../../Input/Input'
import Button from '../../Button/Button'
import TextLink from '../../TextLink/TextLink'

import { useNavigate } from 'react-router-dom'

import { useLoginMutation } from '../../../api/api.js'
import { useState } from 'react'

const LoginForm = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [response, setResponse] = useState(null)

    const navigate = useNavigate()
    
    const [loginMutation, {isLoading, isError}] = useLoginMutation()

    const buttonOnClickHandler = async () => {
        try {
            const response = await loginMutation({email: userEmail, password: userPassword});
            setResponse(response);
            if (response.data) {
                navigate('../../interface');
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }

    const changeEmailHandler = (e) => {

        if (validateEmail(e.target.value)) {
            setUserEmail(e.target.value)
        }
    }

    const changePasswordHandler = (e) => {
        setUserPassword(e.target.value)
    }

  return (
    <div className='w-96'>
        <h2 className='font-bold uppercase text-center'>Login</h2>
        <div className='mt-6 bg-white p-6 rounded-lg'>
            <div className='mb-6'>
                <p className='mb-2'>Email</p>
                <Input onChangeHandler={e => changeEmailHandler(e)} placeholder={'example@gmail.com'} type={'text'} />
            </div>
            <div className='mb-6'>
                <p className='mb-2'>Password</p>
                <Input onChangeHandler={e => changePasswordHandler(e)} placeholder={'my_amazing_password'} type={'password'} />
            </div>
            <Button content={'Login'} isLoading={isLoading} onClickHandler={buttonOnClickHandler} />
            {response && response.error && response.error.data && <p className='text-red-500 text-center mt-4'>{response.error.data.message}</p>}
            <p className='text-base text-center mt-3' >Don`t have account? <TextLink path={'register'}>Create a new account</TextLink></p>
        </div>
    </div>
  )
}

export default LoginForm