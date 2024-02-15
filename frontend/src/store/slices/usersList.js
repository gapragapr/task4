import { createSlice } from "@reduxjs/toolkit";
import {api} from '../../api/api'

const usersListSlice = createSlice({
    name: 'usersList',
    initialState: {
        usersList: []
    },
    reducers: {
        selectUser: (state, action) => {
            const userIndex = state.usersList.findIndex(item => item._id === action.payload.id)
            
            if (state.usersList[userIndex].selected) {
                state.usersList[userIndex].selected = false
            } else {
                state.usersList[userIndex].selected = true
            }
        },
        selectAllUsers: (state, action) => {
            state.usersList.forEach(item => item.selected = true)
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.getUsers.matchFulfilled, (state, action) => {
            state.usersList = action.payload.users.map(user => ({
                ...user,
                selected: false
            }));
        })
    }
})

export const {selectUser, selectAllUsers} = usersListSlice.actions

export default usersListSlice.reducer