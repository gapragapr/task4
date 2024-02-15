import { useNavigate } from 'react-router-dom'

import Input from '../../Input/Input'
import Button from '../../Button/Button'
import TextLink from '../../TextLink/TextLink'

import { useState } from 'react'
import { useRegisterMutation } from '../../../api/api'

const RegisterForm = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [response, setResponse] = useState(null)

    const navigate = useNavigate()
    
    const [registerMutation, {isLoading, isError}] = useRegisterMutation()

    const buttonOnClickHandler = async () => {
        try {
            const response = await registerMutation({email: userEmail, password: userPassword});
            setResponse(response);
            if (response.data) {
                navigate('../../interface');
            }
        } catch (error) {
            console.log(error)
        }
    }
    

    const changeEmailHandler = (e) => {
        setUserEmail(e.target.value)
    }

    const changePasswordHandler = (e) => {
        setUserPassword(e.target.value)
    }

  return (
    <div className='w-96'>
        <h2 className='font-bold uppercase text-center'>Register</h2>
        <div className='mt-6 bg-white p-6 rounded-lg'>
            <div className='mb-6'>
                <p className='mb-2'>Email</p>
                <Input onChangeHandler={e => changeEmailHandler(e)} placeholder={'example@gmail.com'} type={'text'} />
            </div>
            <div className='mb-6'>
                <p className='mb-2'>Password</p>
                <Input onChangeHandler={e => changePasswordHandler(e)} placeholder={'my_amazing_password'} type={'password'} />
            </div>
            <Button content={'Register'} isLoading={isLoading} onClickHandler={buttonOnClickHandler} />
            {response && response.error && <p className='text-red-500 text-center mt-4'>{response.error.data.message}</p>}
            <p className='text-base text-center mt-3' >Have an account? <TextLink path={'login'}>Sign in</TextLink></p>
        </div>
    </div>
  )
}

export default RegisterForm