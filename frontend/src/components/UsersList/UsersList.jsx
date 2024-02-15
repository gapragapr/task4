import React from 'react'
import UserListItem from './UserListItem/UserListItem'

const UsersList = ({usersList}) => {

  return (
    <>
      {usersList.map((item, index) => {
        return <UserListItem key={index} userItem={item} />
      })}
    </>
  )
}

export default UsersList