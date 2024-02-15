import { useSelector, useDispatch} from "react-redux"
import { useGetUsersMutation, useUnblockUserMutation, useBlockUserMutation, useDeleteUserMutation } from "../../api/api"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { selectAllUsers } from "../../store/slices/usersList"

import UsersList from "../UsersList/UsersList"

const Table = () => {
    const {user} = useSelector(state => state.currentUserData)
    const {usersList} = useSelector(state => state.usersList)
    const dispatch = useDispatch()

    const [getUsers, isError] = useGetUsersMutation();
    const [deleteUser] = useDeleteUserMutation();
    const [blockUser] = useBlockUserMutation();
    const [unblockUser] = useUnblockUserMutation()
    const navigate = useNavigate()

   const getUsersList = async () => {
        const response = await getUsers({email: user.email})
   }

   useEffect(() => {
    if (!user) {
        navigate('../form/login')
    } else {
        getUsersList()
    }
   }, [])

   const checkboxClickHandler = (e) => {
     dispatch(selectAllUsers())
   }

   const deleteButtonClickHandler = async () => {
        try {
            const selectedUsers = usersList.filter(item => item.selected)
            const currentUserInDeleteArr = selectedUsers.find(item => item._id === user._id)
            if (currentUserInDeleteArr) {
                navigate('../form/login')
            }
            const responseDelete = await deleteUser({ users: selectedUsers, email: user.email })

            if (responseDelete.data) {
                const responseGetUsers = await getUsers({ email: user.email })
            }
        } catch (error) {
            console.log(e)
        }
   }

   const blockButtonClickHandler = async () => {
    try {
        const selectedUsers = usersList.filter(item => item.selected)
        const currentUserInBlockArr = selectedUsers.find(item => item._id === user._id)
            if (currentUserInBlockArr) {
                navigate('../form/login')
            }
        const responseDelete = await blockUser({ users: selectedUsers, email: user.email })

        if (responseDelete.data) {
            const responseGetUsers = await getUsers({ email: user.email })
        }
    } catch (error) {
        console.log(e)
    }
   }

   const unblockButtonClickHandler = async () => {
    try {
        const selectedUsers = usersList.filter(item => item.selected)
        const responseDelete = await unblockUser({ users: selectedUsers, email: user.email })

        if (responseDelete.data) {
            const responseGetUsers = await getUsers({ email: user.email })
        }
    } catch (error) {
        console.log(e)
    }
   }
    

  return (
    <div className="bg-white p-6 rounded-xl w-5/12">
        <div className="flex justify-around mb-6">
            <div>
                <button onClick={blockButtonClickHandler} className="mr-6 border p-4 rounded-md bg-gray-100">Block</button>
                <button onClick={unblockButtonClickHandler} className="mr-6 border p-4 rounded-md bg-gray-100">Unblock</button>
                <button onClick={deleteButtonClickHandler} className="mr-6 border p-4 rounded-md bg-gray-100">Delete</button>
            </div>
            <p>Hello, {user && user.name}!</p>
        </div>
        <div className="mt-6">
            <div className="grid grid-cols-5 mb-6">
                <input onClick={checkboxClickHandler} checked={usersList.every(item => item.selected)}  type="checkbox" />
                <span>Name</span>
                <span>Email</span>
                <span>Last sing in</span>
                <span>status</span>
            </div>
            {usersList.length > 0 ?
                <UsersList usersList={usersList} /> : 
                <p>Data is null</p>
            }
        </div>
    </div>
  )
}

export default Table