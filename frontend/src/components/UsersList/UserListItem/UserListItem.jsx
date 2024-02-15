import React from 'react'
import { selectUser } from '../../../store/slices/usersList'
import { useDispatch } from 'react-redux'

const UserListItem = ({userItem}) => {
  const dispatch = useDispatch()

  const changeCheckboxHandler = () => {
    dispatch(selectUser({id: userItem._id}))
  }

  return (
    <div className='grid grid-cols-5 w-full mb-3'>
      <input onChange={changeCheckboxHandler} checked={userItem.selected} type="checkbox" />
      <span>{userItem.name}</span> 
      <span>{userItem.email}</span> 
      <span>{userItem.lastDate}</span> 
      <span>{userItem.status}</span>   
    </div>
  )
}

export default UserListItem